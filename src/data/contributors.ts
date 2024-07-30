export enum ContributorType { 
    CORE,
    CONTRIBUTOR,
    PAST,
}

export interface Contributor {
    url?: string;
    icon: string;
    name: string;
    description?: string;
    type: ContributorType;
}

// Sorry this is big :3
export const contributors: Contributor[] = [
    // Core
    {
        url: "https://github.com/BobTheBob9",
        icon: "https://avatars.githubusercontent.com/u/32057864?v=4&s=128",
        name: "bobthebob",
        description: "Big Man, Founder",
        type: ContributorType.CORE,
    },
    {
        url: "https://github.com/emma-miler",
        icon: "https://avatars.githubusercontent.com/u/27428383?v=4&s=128",
        name: "emmam",
        description: "Plugins, Invites, DiscordRPC, Launcher, Moderator, Security",
        type: ContributorType.CORE,
    },
    {
        url: "https://github.com/RoyalBlue1",
        icon: "https://avatars.githubusercontent.com/u/11448698?v=4&s=128",
        name: "royalblue",
        description: "Squirrel, Frontier Defense, Tool Developer",
        type: ContributorType.CORE,
    },
    {
        url: "https://github.com/GeckoEidechse",
        icon: "https://avatars.githubusercontent.com/u/40122905?v=4&s=128",
        name: "gecko",
        description: "Release Management, Maintainer, Security, FlightCore",
        type: ContributorType.CORE,
    },
    {
        url: "https://github.com/pg9182",
        icon: "https://avatars.githubusercontent.com/u/96569817?v=4&s=128",
        name: "pg9182",
        description: "Atlas, Server Container, Stubs, Linux, Security",
        type: ContributorType.CORE,
    },
    {
        url: "https://github.com/wolf109909",
        icon: "https://avatars.githubusercontent.com/u/84360921?v=4&s=128",
        name: "wolf109909",
        description: "NorthstarCN",
        type: ContributorType.CORE,
    },
    {
        url: "https://github.com/p0358",
        icon: "https://avatars.githubusercontent.com/u/5182588?v=4&s=128",
        name: "p0358",
        description: "Source Genius, TFO, DLL Injector, Origin LSX",
        type: ContributorType.CORE,
    },
    {
        url: "https://github.com/ASpoonPlaysGames",
        icon: "https://avatars.githubusercontent.com/u/66967891?v=4&s=128",
        name: "spoon",
        description: "RPak/Starpak, Stats/Progression, Persistence, Advocate, Bug fixes",
        type: ContributorType.CORE,
    },

    // Contributors
    {
        url: "https://github.com/BigSpice",
        icon: "https://avatars.githubusercontent.com/u/23240514?v=4&s=128",
        name: "juicy",
        description: "VTOL, Skins",
        type: ContributorType.CONTRIBUTOR,
    },
    {
        url: "https://github.com/taskinoz",
        icon: "https://avatars.githubusercontent.com/u/7439692?v=4&s=128",
        name: "taskinoz",
        description: "Moderator, NavMeshes",
        type: ContributorType.CONTRIBUTOR,
    },
    {
        url: "https://github.com/laundmo",
        icon: "https://avatars.githubusercontent.com/u/24855949?v=4&s=128",
        name: "laundmo",
        description: "Modding Docs, Chathooks",
        type: ContributorType.CONTRIBUTOR,
    },
    {
        url: "https://github.com/DBmaoha/",
        icon: "https://avatars.githubusercontent.com/u/56738369?v=4&s=128",
        name: "VoyageDB",
        description: "Frontier War, Bounty Hunt, Squirrel bug fixes",
        type: ContributorType.CONTRIBUTOR,
    },
    {
        url: "https://github.com/barnabwhy",
        icon: "https://avatars.githubusercontent.com/u/22575741?v=4&s=128",
        name: "barnaby",
        description: "Master Server, Website, TFO",
        type: ContributorType.CONTRIBUTOR,
    },
    {
        url: "https://github.com/Erlite",
        icon: "https://avatars.githubusercontent.com/u/25248023?v=4&s=128",
        name: "erlite",
        description: "Spyglass, WebSquirrel, Security",
        type: ContributorType.CONTRIBUTOR,
    },
    {
        url: "https://github.com/Mauler125",
        icon: "https://avatars.githubusercontent.com/u/48657826?v=4&s=128",
        name: "amos",
        description: "Source Genius, RCON, R5R, Security",
        type: ContributorType.CONTRIBUTOR,
    },
    {
        url: "https://github.com/cpdt",
        icon: "https://avatars.githubusercontent.com/u/16081865?v=4&s=128",
        name: "snnag",
        description: "Chathooks, Server Browser, Exploit fixes, Security",
        type: ContributorType.CONTRIBUTOR,
    },
    {
        url: "https://github.com/F1F7Y",
        icon: "https://avatars.githubusercontent.com/u/64418963?v=4&s=128",
        name: "f1f7y",
        description: "Server Browser, Attrition, Maps",
        type: ContributorType.CONTRIBUTOR,
    },
    {
        url: "https://github.com/snake-biscuits",
        icon: "https://avatars.githubusercontent.com/u/36507175?v=4&s=128",
        name: "b1scuit",
        description: "Maps",
        type: ContributorType.CONTRIBUTOR,
    },
    {
        url: "https://github.com/Legonzaur",
        icon: "https://avatars.githubusercontent.com/u/34353603?v=4&s=128",
        name: "legonzaur",
        description: "Discord Bot",
        type: ContributorType.CONTRIBUTOR,
    },
    {
        url: "https://github.com/catornot",
        icon: "https://avatars.githubusercontent.com/u/41955154?v=4&s=128",
        name: "cat_or_not",
        description: "Co-Op Singleplayer",
        type: ContributorType.CONTRIBUTOR,
    },
    {
        url: "https://github.com/x3Karma",
        icon: "https://avatars.githubusercontent.com/u/22678145?v=4&s=128",
        name: "x3karma",
        description: "Moderator, Modding, Frontier Defense",
        type: ContributorType.CONTRIBUTOR,
    },
    {
        url: "https://github.com/Alystrasz",
        icon: "https://avatars.githubusercontent.com/u/11993538?v=4&s=128",
        name: "alystrasz",
        description: "Localisations, Launchers, Documentation",
        type: ContributorType.CONTRIBUTOR,
    },
    {
        url: "https://github.com/Dinorush",
        icon: "https://avatars.githubusercontent.com/u/62536724?v=4&s=128",
        name: "dinorush",
        description: "Gamemodes",
        type: ContributorType.CONTRIBUTOR,
    },
    {
        url: "https://github.com/hummusbird",
        icon: "https://avatars.githubusercontent.com/u/38541651?v=4&s=128",
        name: "birb",
        description: "Server Bot",
        type: ContributorType.CONTRIBUTOR,
    },
    {
        url: "https://github.com/H0L0theBard",
        icon: "https://avatars.githubusercontent.com/u/97146561?v=4&s=128",
        name: "h0l0",
        description: "Moderator, Server Bot, Co-Op Singleplayer",
        type: ContributorType.CONTRIBUTOR,
    },
    {
        url: "https://github.com/uniboi",
        icon: "https://avatars.githubusercontent.com/u/64006268?v=4&s=128",
        name: "uniboi",
        description: "Modding Docs",
        type: ContributorType.CONTRIBUTOR,
    },
    {
        url: "https://github.com/EladNLG",
        icon: "https://avatars.githubusercontent.com/u/44613424?v=4&s=128",
        name: "eladnlg",
        description: "UI, Modding, Roguelike",
        type: ContributorType.CONTRIBUTOR,
    },
    {
        url: "https://github.com/r-ex",
        icon: "https://avatars.githubusercontent.com/u/67599507?v=4&s=128",
        name: "rexx",
        description: "Custom Models, Legion, RePak",
        type: ContributorType.CONTRIBUTOR,
    },
    {
        url: "https://github.com/headassbtw",
        icon: "https://avatars.githubusercontent.com/u/16214950?v=4&s=128",
        name: "headass",
        description: "Custom Models",
        type: ContributorType.CONTRIBUTOR,
    },
    {
        url: "https://github.com/Masterliberty",
        icon: "https://avatars.githubusercontent.com/u/94194459?v=4&s=128",
        name: "masterliberty",
        description: "Custom Models",
        type: ContributorType.CONTRIBUTOR,
    },
    {
        url: "https://github.com/KyleGospo",
        icon: "https://avatars.githubusercontent.com/u/10704358?v=4&s=128",
        name: "kylegospo",
        description: "LatencyFlex",
        type: ContributorType.CONTRIBUTOR,
    },
    {
        url: "https://github.com/Zanieon",
        icon: "https://avatars.githubusercontent.com/u/11906641?v=4&s=128",
        name: "Zanieon",
        description: "Navmeshes, Frontier Defense",
        type: ContributorType.CONTRIBUTOR,
    },
    {
        url: "https://github.com/Jan200101/",
        icon: "https://avatars.githubusercontent.com/u/15076013?v=4&s=128",
        name: "Jan200101",
        description: "Linux support, Launcher development/code-cleanup",
        type: ContributorType.CONTRIBUTOR,
    },
    {
        url: "https://github.com/EM4Volts",
        icon: "https://avatars.githubusercontent.com/u/87427011?v=4&s=128",
        name: "EM4V",
        description: "Modding Docs, Doublebarrel Shotgun",
        type: ContributorType.CONTRIBUTOR,
    },

    // Past
    {
        url: "https://github.com/abarichello",
        icon: "https://avatars.githubusercontent.com/u/16687318?v=4&s=128",
        name: "barichello",
        description: "Code Formatting, Github-CI",
        type: ContributorType.PAST,
    },
    {
        url: "https://github.com/KittenPopo",
        icon: "https://avatars.githubusercontent.com/u/28826980?v=4&s=128",
        name: "kittenpopo",
        description: "Exploit fixes, Security",
        type: ContributorType.PAST,
    },
    {
        url: "https://github.com/geniiii",
        icon: "https://avatars.githubusercontent.com/u/24881499?v=4&s=128",
        name: "geni",
        description: "Early Fixes",
        type: ContributorType.PAST,
    },
    {
        url: "https://github.com/warmist",
        icon: "https://avatars.githubusercontent.com/u/917145?v=4&s=128",
        name: "warmist",
        description: "NavMeshes",
        type: ContributorType.PAST,
    },
];