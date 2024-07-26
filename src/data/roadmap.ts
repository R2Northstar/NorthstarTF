export interface RoadmapItem {
    title: string;
    description: string;
    image: string;
    alt: string;
}

export interface RoadmapStage {
    title: string;
    items: RoadmapItem[];
}

export const roadmap: RoadmapStage[] = [
    {
        title: "Gameplay",
        items: [
            {
                title: "Frontier Defense",
                description: "The beloved PvE mode in Northstar. Both in its vanilla version as well as extended with cut content and extra features.",
                image: "/assets/frontier-defense-poster.jpg",
                alt: "Two Tians in front of the Frontier Defense harvester with another two Titans in the back."
            },
            {
                title: "Mod Auto Download",
                description: "Download custom mods such as gamemodes and maps when joining a server in a safe way.",
                image: "/assets/screenshot-mad-mod-download.jpg",
                alt: "A screenshot showing mod auto download in action."
            },
            {
                title: "Party System",
                description: "Implement the vanilla party system so you can group up with friends and join servers together.",
                image: "/assets/NorthstarPromoPoster.jpg",
                alt: "The Northstar Promo poster showing a Northstar Titan using their FlightCore ability."
            },
        ],
    },
    {
        title: "Mapping tools",
        items: [
            {
                title: "Titanfall 1 maps",
                description: "Bringing maps from Titanfall 1 into Northstar.",
                image: "/assets/screenshot-runoff-northstar.jpg",
                alt: "A screenshot of the Runoff map from Titanfall1 loaded into Titanfall2 using Northstar."
            },
            {
                title: "Custom maps",
                description: "Create tools for building custom maps so that the community can create their own maps.",
                image: "/assets/screenshot-dust2-northstar.jpg",
                alt: "A screenshot of a development version of the dust2 map in Northstar."
            },
        ],
    },
    {
        title: "Modding improvements",
        items: [
            {
                title: "Custom RUI",
                description: "Reverse Respawn's UI system to allow for custom crosshairs and UI elements.",
                image: "/assets/NorthstarPromoPoster.jpg",
                alt: "The Northstar Promo poster showing a Northstar Titan using their FlightCore ability."
            },
            {
                title: "Modded Persistence",
                description: "Reverse and extend the persistence system to allow players to store custom weapons and Titans in their loadouts.",
                image: "/assets/NorthstarPromoPoster.jpg",
                alt: "The Northstar Promo poster showing a Northstar Titan using their FlightCore ability."
            },
        ],
    },
    {
        title: "...",
        items: [
            {
                title: "...whatever the future holds",
                description: "Do you have an idea for Northstar? Wanna help? Join our Discord and talk to us!",
                image: "/assets/NorthstarPromoPoster.jpg",
                alt: "The Northstar Promo poster showing a Northstar Titan using their FlightCore ability."
            },
        ],
    },
];