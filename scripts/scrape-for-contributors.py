import json
import re
import requests
from typing import List, Optional

github_token = (
    None  # supply a github token to avoid ratelimit, or don't, it's up to you
)

contributor_list_file = "../src/data/contributors.ts"

orgs = ["R2Northstar", "R2NorthstarTools"]

excluded_repos = [
    "R2Northstar/zlib",  # zlib is kind of empty, so we can exclude it
    "R2NorthstarTools/NorthstarProton",  # Ignore NorthstarProton as it's a fork and difficult to untangle contributions from upstream
]

# List of users to exclude
excluded_users = [
    "dependabot[bot]",  # bot
    "harmony-weblate",  # bot
]


def extract_github_usernames(contributor_list_file):
    # Regular expression to match GitHub user URLs with quotation marks
    github_url_pattern = r'"https://github\.com/([\w-]+)/?"'

    # Read file
    with open(contributor_list_file, "r") as f:
        file_contents = f.read()

    # Extract GitHub usersnames
    usernames = re.findall(github_url_pattern, file_contents)

    return usernames


def get_repos(org_name) -> Optional[List[str]]:
    print(f"Org: {org}")
    url = f"https://api.github.com/orgs/{org_name}/repos"
    headers = {}
    if github_token is not None:
        headers = {"Authorization": f"Bearer {github_token}"}
    response = requests.get(url, headers=headers)
    if response.status_code == 200:
        repos = response.json()
        return [repo["name"] for repo in repos]
    else:
        print(f"Failed to retrieve contributors. Status code: {response.status_code}")
        print(f"Response: {response.text}")
        return None


# Exclude manually added contributors
excluded_users += extract_github_usernames(contributor_list_file)


contributors = {}

for org in orgs:
    repos = get_repos(org)
    if repos is None:
        continue
    for repo in repos:
        if f"{org}/{repo}" in excluded_repos:
            continue

        print(f"Repo: {org}/{repo}")
        url = f"https://api.github.com/repos/{org}/{repo}/contributors"
        headers = {}
        if github_token is not None:
            headers = {"Authorization": f"Bearer {github_token}"}
        response = requests.get(url, headers=headers)
        if response.status_code == 200:
            repo_contributors = response.json()
            for contributor in repo_contributors:
                if contributor["login"] in excluded_users:
                    continue

                if contributor["login"] in contributors:
                    contributors[contributor["login"]] = {
                        "login": contributor["login"],
                        "contributions": contributors[contributor["login"]][
                            "contributions"
                        ]
                        + contributor["contributions"],
                        "avatar_url": contributor["avatar_url"],
                    }
                else:
                    contributors[contributor["login"]] = {
                        "login": contributor["login"],
                        "contributions": contributor["contributions"],
                        "avatar_url": contributor["avatar_url"]
                        + "&s=128",  # Make sure to use lower resolution version to not overload client on load
                    }

sorted_contributors = sorted(
    contributors.values(), key=lambda x: x["contributions"], reverse=True
)

json_data = json.dumps(
    sorted_contributors,
    indent=4,
)

print("Writing to contributors.json")
f = open("contributors.json", "w")
f.write(json_data)
f.close()
