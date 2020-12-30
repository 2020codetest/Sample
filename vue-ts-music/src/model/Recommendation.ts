export const enum RecomendationType{
    SongList = 0,
    Cover = 1,
}

export interface CoverRecomendation{
    cover: string;
    id: string;
}

export interface SongListRecomendation extends CoverRecomendation {
    title: string;
    desc: string;
}