import json
import requests
from typing import List, Optional

github_token = (
    None  # supply a github token to avoid ratelimit, or don't, it's up to you
)

orgs = ["R2Northstar", "R2NorthstarTools"]

excluded_repos = ["R2Northstar/zlib"]  # zlib is kind of empty, so we can exclude it

# List of users to exclude
exluded_users = [
    "GloriousEggroll",  # gloriouseggroll is credited to 2k+ commits on NorthstarProton, because it's a fork, we can exclude them
    "dependabot[bot]",  # bot
    "harmony-weblate",  # bot
]


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
                if contributor["login"] in exluded_users:
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
                        "avatar_url": contributor["avatar_url"] + "&s=128", # Make sure to use lower resolution version to not overload client on load
                    }

json_data = json.dumps(
    sorted(contributors.values(), key=lambda x: x["contributions"], reverse=True),
    indent=4,
)

print("Writing to contributors.json")
f = open("contributors.json", "w")
f.write(json_data)
f.close()
