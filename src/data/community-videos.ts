export interface VideoItem {
    comment: string;
    youtube_id: string;
    creator: string;
    date: Date;
}

export const community_videos: VideoItem[] = [
    {
        comment: "Original Northstar Trailer",
        youtube_id: "en06Y6CPMQg",
        creator: "Smurfson",
        date: new Date("2021-12-31"),
    },
    {
        comment: "Return to the Frontier Gameplay Trailer",
        youtube_id: "suhBGqzDbNA",
        creator: "Smurfson",
        date: new Date("2022-05-01"),
    },
    {
        comment: "Back in the Game Gameplay Trailer",
        youtube_id: "vyUxAwobY60",
        creator: "Smurfson",
        date: new Date("2022-10-28"),
    },
    {
        comment: "Happy Holidays (Northstar 1.21) Trailer",
        youtube_id: "jixxGZ-NVZo",
        creator: "TrinityDusk",
        date: new Date("2023-12-18"),
    },
    {
        comment: "Parkour Mode Gameplay Trailer",
        youtube_id: "1DSNwdV8ahA",
        creator: "P3NG00Nlol",
        date: new Date("2024-01-10"),
    },
    {
        comment: "3rd Anniversary Gameplay Trailer",
        youtube_id: "jMME2ngNfRg",
        creator: "Smurfson",
        date: new Date("2025-01-08"),
    },
    {
        comment: "Parkour Mode Update (Gameplay Trailer)",
        youtube_id: "BUahnN_UKRc",
        creator: "P3NG00Nlol",
        date: new Date("2025-01-08"),
    },
];
