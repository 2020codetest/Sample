export interface Creator {
    name: string;
}

export interface Disc {
    dissname: string;
    imgurl: string;
    dissid: string;
    creator: Creator;
}

export interface DiscData {
    list: Disc[];
}