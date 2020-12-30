export interface Singer{
    cover: string;
    id: string;
    name: string;
}

export interface SingerRepo{
    category: string;
    singers: Singer[];
}