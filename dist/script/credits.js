var template = `
<div class="contributor" >
    <img src="ICONNAME" onclick="window.open('URL')">
    <a class="name header">USERNAME</a>
    <div class="blurb">
        DESCRIPTION
    </div>
</div>
`

function addContributor(group, url, icon, name, description) {
    var x = template.replace("ICONNAME", icon);
    x = x.replace("URL", url);
    x = x.replace("USERNAME", name);
    x = x.replace("DESCRIPTION", description);
    document.getElementById(group).insertAdjacentHTML("beforeend", x);
}

/**
 * Loads the members of various categories from JSON
 */
function loadCredits() {
    // Load core contributors
    fetch('/data/core.json') // Fetch the JSON file
        .then(response => response.json()) // Parse the JSON data
        .then(data => { // Add each member to least
            data.forEach(item => {
                addContributor("core", item.url, item.icon, item.name, item.description);
            });
        })
        .catch(error => console.error('Error fetching the JSON file:', error));

    // Load contributors
    fetch('/data/contrib.json') // Fetch the JSON file
        .then(response => response.json()) // Parse the JSON data
        .then(data => { // Add each member to least
            data.forEach(item => {
                addContributor("contrib", item.url, item.icon, item.name, item.description);
            });
        })
        .catch(error => console.error('Error fetching the JSON file:', error));

    // Load past contributors
    fetch('/data/past-contrib.json') // Fetch the JSON file
        .then(response => response.json()) // Parse the JSON data
        .then(data => { // Add each member to least
            data.forEach(item => {
                addContributor("past-contrib", item.url, item.icon, item.name, item.description);
            });
        })
        .catch(error => console.error('Error fetching the JSON file:', error));
}

loadCredits();

