import requests
from collections import defaultdict
import sys

github_token = (
    None
)

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
review_counts = defaultdict(int)

for repo in repos:
    repo_name = repo["name"]
    prs = get_pull_requests(repo_name)

    for pr in prs:
        pr_number = pr["number"]
        reviews = get_reviews_for_pr(repo_name, pr_number)

        for review in reviews:
            if not review["user"] or not review["user"]["login"]:
                continue
            if review["body"] != "":
                # Current object is comment on a review not an actual review, skip
                continue
            user = review["user"]["login"]
            review_counts[user] += 1

# Sort the review counts dictionary by count in descending order
sorted_review_counts = sorted(
    review_counts.items(), key=lambda item: item[1], reverse=True
)


# Generate TypeScript code
def generate_typescript_code(sorted_review_counts):

    file_header_string = "// Auto-generated from Python script\n"

    definition_string = """
export interface ReviewCount {
    url?: string;
    name: string;
    count: number;
}
"""
    list_start_string = (
        """export const review_counts: ReviewCount[] = ["""
    )
    list_end_string = """
]
"""

    contributor_list_string = ""
    for user, count in sorted_review_counts:
        contributor_list_string += f"""
    {{
        url: "https://github.com/{user}",
        name: "{user}",
        count: {count},
    }},"""

    return (
        file_header_string
        + definition_string
        + list_start_string
        + contributor_list_string
        + list_end_string
    )


typscript_code = generate_typescript_code(sorted_review_counts)

with open("../src/data/reviewer-count.ts", "w") as f:
    f.write(typscript_code)
