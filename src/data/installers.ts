
export interface Installer {
    icon?: string;
    name: string;
    description?: string;
    featured: boolean;
    tags: string[];
    buttons: InstallerButton[];
}

export interface InstallerButton {
    text: string;
    icon: string;
    href: string;
}

export const installers: Installer[] = [
    {
        icon: "/assets/flightcore.png",
        name: "FlightCore",
        description:
            "Fast and easy to use Northstar installer, updater, launcher, and mod-manager. Features built-in mod browser and allows for easy installation of pre-release versions of Northstar.",
        featured: true,
        tags: ["Windows", "Linux"],
        buttons: [
            {
                text: "Download",
                icon: "/assets/manual.svg",
                href: "https://r2northstartools.github.io/FlightCore/index.html?win-setup",
            },
            {
                text: "Github",
                icon: "/assets/github.svg",
                href: "https://github.com/R2NorthstarTools/FlightCore/",
            },
        ],
    },
    {
        icon: "/assets/vtol.png",
        name: "VTOL",
        description:
            "Easy to use and extensive Northstar installer and mod-manager. Supports installing from Thunderstore as well as from outside sources like GitHub/GitLab. Supports installing custom weapon/pilot skins and managing dedicated servers.",
        featured: false,
        tags: ["Windows"],
        buttons: [
            {
                text: "Download",
                icon: "/assets/manual.svg",
                href: "https://github.com/BigSpice/VTOL/releases/latest/download/VTOL_Installer.msi",
            },
            {
                text: "Github",
                icon: "/assets/github.svg",
                href: "https://github.com/BigSpice/VTOL",
            },
        ],
    },
    {
        icon: "/assets/viper.png",
        name: "Viper",
        description:
            "Simple and easy to use Northstar installer and auto-updater. Allows launching both Northstar and vanilla Titanfall 2. Features mod-manager and built-in mod browser for Thunderstore.",
        featured: false,
        tags: ["Windows", "Linux"],
        buttons: [
            {
                text: "Download",
                icon: "/assets/manual.svg",
                href: "https://0negal.github.io/viper",
            },
            {
                text: "Github",
                icon: "/assets/github.svg",
                href: "https://github.com/0neGal/viper",
            },
        ],
    },
    {
        icon: "/assets/manual.svg",
        name: "Manual",
        description:
            "You can install Northstar manually if you want to. Note that Northstar does not automatically update when installed this way.",
        featured: true,
        tags: ["Windows", "Linux"],
        buttons: [
            {
                text: "Download",
                icon: "/assets/manual.svg",
                href: "https://github.com/R2Northstar/Northstar/releases/latest",
            },
            {
                text: "Guide",
                icon: "/assets/icon_wiki.svg",
                href: "https://r2northstar.gitbook.io/r2northstar-wiki/installing-northstar/manual-installation",
            },
        ],
    },
];