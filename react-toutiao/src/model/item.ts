import { image } from "./image";

export interface item {
    media_name: string;
    abstract: string;
    title: string;
    source: string;
    image_list: image[];
    label?: string;
    comment_count: number;
    item_id: string;
    image_url?: string;
    large_image_url?: string;
}