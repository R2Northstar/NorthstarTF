import requests
from collections import defaultdict
import datetime
import sys

github_token = None

# supply a github token in an arg avoid ratelimit, or don't, it's up to you
if len(sys.argv) > 1:
    github_token = sys.argv[1]

# Replace with the GitHub organization name
github_org = "R2Northstar"

# Base URL for GitHub API
base_url = f"https://api.github.com/orgs/{github_org}"

# Headers for authentication
headers = {"Authorization": f"token {github_token}"}


def get_repos():
    """Fetch all repositories for the organization, handling pagination."""
    repos = []
    page = 1

    while True:
        url = f"{base_url}/repos?per_page=100&page={page}"
        response = requests.get(url, headers=headers)
        response.raise_for_status()
        page_repos = response.json()

        if not page_repos:  # If the list is empty, we've reached the last page
            break

        repos.extend(page_repos)
        page += 1

    return repos


def get_pull_requests(repo_name):
    """Fetch all pull requests in the repository, handling pagination."""
    print(f"{repo_name=}")
    prs = []
    page = 1

    while True:
        print(f"{page=}")
        url = f"https://api.github.com/repos/{github_org}/{repo_name}/pulls?state=all&per_page=100&page={page}"
        response = requests.get(url, headers=headers)
        response.raise_for_status()
        page_prs = response.json()

        if not page_prs:  # If the list is empty, we've reached the last page
            break

        prs.extend(page_prs)
        page += 1

    return prs


def get_reviews_for_pr(repo_name, pr_number):
    """Fetch all reviews for a given pull request in a specific repository."""
    url = f"https://api.github.com/repos/{github_org}/{repo_name}/pulls/{pr_number}/reviews"
    response = requests.get(url, headers=headers)
    response.raise_for_status()
    return response.json()


# Fetch all repositories in the organization
repos = get_repos()

# Dictionary to store the count of reviews per user
review_dict = defaultdict(list)


def is_trivial_review(review_text: str):
    """Perform a variety of checks to determine whether a review should be discarded due to not being extensive enough"""
    min_review_length = 30
    if "lgtm" in review_text.lower():
        return True

    if len(review_text) < min_review_length:
        return True

    return False


for repo in repos:
    repo_name = repo["name"]
    prs = get_pull_requests(repo_name)

    for pr in prs:
        pr_number = pr["number"]
        reviews = get_reviews_for_pr(repo_name, pr_number)

        for review in reviews:
            if not review["user"] or not review["user"]["login"]:
                continue
            if review["body"] == "":
                # Current object is comment on a review not an actual review, skip
                continue
            if is_trivial_review(review["body"]):
                continue

            user = review["user"]["login"]
            review_dict[user].append(
                datetime.datetime.fromisoformat(
                    review["submitted_at"].replace("Z", "+00:00")
                )
            )


def filter_by_timeframe(reviews_dict, weeks=1):
    """
    Filters out reviews older than `weeks` weeks.
    Additionally removes empty reviewer entries after filtering.
    """
    # Apply the filter using a dictionary comprehension
    now = datetime.datetime.now(datetime.timezone.utc)
    filtered_review_counts = defaultdict(
        list,
        {
            reviewer: [
                review_time
                for review_time in reviews
                if now - review_time < datetime.timedelta(weeks=weeks)
            ]
            for reviewer, reviews in reviews_dict.items()
        },
    )

    # Remove empty entries
    filtered_review_counts = defaultdict(
        list,
        {
            reviewer: reviews
            for reviewer, reviews in filtered_review_counts.items()
            if len(reviews) > 0
        },
    )

    return filtered_review_counts


def sum_up_reviews(reviews_dict):
    """Sum up review counts per reviewer"""
    return {k: len(v) for k, v, in reviews_dict.items()}


def sort_alphabetically(reviews_dict):
    """Sort alphabetivally by reviewer name"""
    sorted_reviewers = sorted(
        reviews_dict.items(),
        key=lambda item: item[0].lower(),
    )
    return sorted_reviewers


# Generate TypeScript code
def generate_typescript_code(sorted_review_counts, timeframe="total"):
    file_header_string = "// Auto-generated from Python script\n"

    definition_string = """
export interface ReviewCount {
    url?: string;
    name: string;
    count: number;
}
"""
    list_start_string = f"""export const review_counts_{timeframe}: ReviewCount[] = ["""
    list_end_string = """
]
"""

    reviewer_list_string = ""
    for user, count in sorted_review_counts:
        reviewer_list_string += f"""
    {{
        url: "https://github.com/{user}",
        name: "{user}",
        count: {count},
    }},"""

    return (
        file_header_string
        + definition_string
        + list_start_string
        + reviewer_list_string
        + list_end_string
    )


# Total stats
with open("../src/data/reviewer-count.ts", "w") as f:
    f.write(
        generate_typescript_code(
            sort_alphabetically(sum_up_reviews(review_dict)), "total"
        )
    )

# Monthly stats
with open("../src/data/reviewer-count-monthly.ts", "w") as f:
    f.write(
        generate_typescript_code(
            sort_alphabetically(
                sum_up_reviews(filter_by_timeframe(review_dict, weeks=4))
            ),
            "monthly",
        )
    )

# Weekly stats
with open("../src/data/reviewer-count-weekly.ts", "w") as f:
    f.write(
        generate_typescript_code(
            sort_alphabetically(
                sum_up_reviews(filter_by_timeframe(review_dict, weeks=1))
            ),
            "weekly",
        )
    )
