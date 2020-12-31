interface Singer{
    id: number;
    name: string;
}

interface MusicData{
    singer: Singer[];
    songname: string;
    songid: number;
    albumname: string;
}

export interface Song{
    musicData: MusicData;
}