export interface SongItem {
    singername: string;
    songname: string;
}

export interface TopItem{
    id: number;
    picUrl: string;
    topTitle: string;
    songList: SongItem[];
}