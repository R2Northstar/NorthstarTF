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
}

loadCredits();

addContributor("contrib", "https://github.com/BigSpice", "https://avatars.githubusercontent.com/u/23240514?v=4", "juicy", "VTOL, Skins")
addContributor("contrib", "https://github.com/taskinoz", "https://avatars.githubusercontent.com/u/7439692?v=4", "taskinoz", "Moderator, NavMeshes")
addContributor("contrib", "https://github.com/laundmo", "https://avatars.githubusercontent.com/u/24855949?v=4", "laundmo", "Modding Docs, Chathooks")
addContributor("contrib", "https://github.com/DBmaoha/", "https://avatars.githubusercontent.com/u/56738369?v=4", "VoyageDB", "Frontier War, Bounty Hunt, Squirrel bug fixes")
addContributor("contrib", "https://github.com/barnabwhy", "https://avatars.githubusercontent.com/u/22575741?v=4", "barnaby", "Master Server, Website")

addContributor("contrib", "https://github.com/Erlite", "https://avatars.githubusercontent.com/u/25248023?v=4", "erlite", "Spyglass, WebSquirrel, Security")
addContributor("contrib", "https://github.com/Mauler125", "https://avatars.githubusercontent.com/u/48657826?v=4", "amos", "Source Genius, RCON, R5R, Security")
addContributor("contrib", "https://github.com/cpdt", "https://avatars.githubusercontent.com/u/16081865?v=4", "snnag", "Chathooks, Server Browser, Exploit fixes, Security")
addContributor("contrib", "https://github.com/F1F7Y", "https://avatars.githubusercontent.com/u/64418963?v=4", "f1f7y", "Server Browser, Attrition, Maps")
addContributor("contrib", "https://github.com/snake-biscuits", "https://avatars.githubusercontent.com/u/36507175?v=4", "b1scuit", "Maps")


addContributor("contrib", "https://github.com/Legonzaur", "https://avatars.githubusercontent.com/u/34353603?v=4", "legonzaur", "Discord Bot")
addContributor("contrib", "https://github.com/catornot", "https://avatars.githubusercontent.com/u/41955154?v=4", "cat_or_not", "Co-Op Singleplayer")
addContributor("contrib", "https://github.com/x3Karma", "https://avatars.githubusercontent.com/u/22678145?v=4", "x3karma", "Moderator, Modding, Frontier Defense")
addContributor("contrib", "https://github.com/Alystrasz", "https://avatars.githubusercontent.com/u/11993538?v=4", "alystrasz", "Localisations, Launchers, Documentation")
addContributor("contrib", "https://github.com/Dinorush", "https://avatars.githubusercontent.com/u/62536724?v=4", "dinorush", "Gamemodes")
addContributor("contrib", "https://github.com/hummusbird", "https://avatars.githubusercontent.com/u/38541651?v=4", "birb", "Server Bot")
addContributor("contrib", "https://github.com/H0L0theBard", "https://avatars.githubusercontent.com/u/97146561?v=4", "h0l0", "Moderator, Server Bot, Co-Op Singleplayer")
addContributor("contrib", "https://github.com/uniboi", "https://avatars.githubusercontent.com/u/64006268?v=4", "uniboi", "Modding Docs")
addContributor("contrib", "https://github.com/EladNLG", "https://avatars.githubusercontent.com/u/44613424?v=4", "eladnlg", "UI, Modding, Roguelike")

addContributor("contrib", "https://github.com/r-ex", "https://avatars.githubusercontent.com/u/67599507?v=4", "rexx", "Custom Models, </br> Legion, RePak")
addContributor("contrib", "https://github.com/headassbtw", "https://avatars.githubusercontent.com/u/16214950?v=4", "headass", "Custom Models")
addContributor("contrib", "https://github.com/Masterliberty", "https://avatars.githubusercontent.com/u/94194459?v=4", "masterliberty", "Custom Models")

addContributor("contrib", "https://github.com/KyleGospo", "https://avatars.githubusercontent.com/u/10704358?v=4", "kylegospo", "LatencyFlex")

addContributor("contrib", "https://github.com/Zanieon", "https://avatars.githubusercontent.com/u/11906641?v=4", "Zanieon", "Navmeshes, Frontier Defense")
addContributor("contrib", "https://github.com/Jan200101/", "https://avatars.githubusercontent.com/u/15076013?v=4", "Jan200101", "Linux support, Launcher development/code-cleanup")
addContributor("contrib", "https://github.com/EM4Volts", "https://avatars.githubusercontent.com/u/87427011?v=4", "EM4V", "Modding Docs, Doublebarrel Shotgun")

addContributor("past-contrib", "https://github.com/abarichello", "https://avatars.githubusercontent.com/u/16687318?v=4", "barichello", "Code Formatting, Github-CI")
addContributor("past-contrib", "https://github.com/KittenPopo", "https://avatars.githubusercontent.com/u/28826980?v=4", "kittenpopo", "Exploit fixes, Security")
addContributor("past-contrib", "https://github.com/geniiii", "https://avatars.githubusercontent.com/u/24881499?v=4", "geni", "Early Fixes")
addContributor("past-contrib", "https://github.com/warmist", "https://avatars.githubusercontent.com/u/917145?v=4", "warmist", "NavMeshes")
