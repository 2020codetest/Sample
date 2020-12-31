import { UserSong } from "../user/Song";

export interface CoverRecItem {
    id: number;
    cover: string;
}

export interface DiscItem {
    title: string;
    desc: string;
    cover: string;
    id: string;
}

export interface HotKeyItem {
    key: string;
}

export interface PlayListData {
    cover: string;
    title: string;
    list: UserSong[];
}

export interface PlayData {
    cover: string;
    duration: number;
    singer: string;
    songname: string;
    musicurl: string;
    lyric?: string;
}