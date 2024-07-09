var template = `
<div class="roadmap-card">
    <img src="IMAGE" alt="IMAGE_ALT_TEXT">
    <div class="roadmap-card-content">
        <div class="roadmap-card-title">TITLE</div>
        <div class="roadmap-card-text">DESCRIPTION</div>
    </div>
</div>
`

function addRoadmapItem(group, icon, image_alt_text, title, description) {

    var x = template.replace("IMAGE", icon)
        .replace("IMAG_ALT_TEXT", image_alt_text)
        .replace("TITLE", title)
        .replace("DESCRIPTION", description);

    document.getElementById(group).insertAdjacentHTML("beforeend", x);
}

function loadsRoadmap() {
    fetch('/data/roadmap.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                addRoadmapItem("roadmap", item.image, item.image_alt_text, item.title, item.description);
            });
        })
        .catch(error => console.error('Error fetching the JSON file:', error));
}
