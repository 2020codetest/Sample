import { TopItem } from "./TopItem";

export interface TopData{
    topList: TopItem[];
}

export interface TopResponse {
    data: TopData;
}