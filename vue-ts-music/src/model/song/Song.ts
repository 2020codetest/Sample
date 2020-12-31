interface Singer{
    id: number;
    name: string;
}

interface MusicData{
    singer: Singer[];
    songname: string;
}

export interface Song{
    musicData: MusicData;
}