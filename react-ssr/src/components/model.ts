
export interface ItemData {
    title: string;
    img: string;
}

export interface DetailData {
    props: ItemData;
}

export interface ListData {
    items: ItemData[];
}
