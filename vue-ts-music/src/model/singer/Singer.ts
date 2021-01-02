export interface Singer{
    name: string;
    id: number;
    avatar: string;
}

export interface SingerRepo{
    title: string;
    items: Singer[];
}