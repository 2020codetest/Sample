import { Song } from "./Song";

interface AlbumData{
    list: Song[];
    singer_name: string;
}

export interface AlbumResponse{
    data: AlbumData;
}