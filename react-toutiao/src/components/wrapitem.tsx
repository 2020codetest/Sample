import React from "react"
import { model } from "../model/model";
import { ImageItem } from "./imageitem";
import { ImageListItem } from "./imagelistitem";
import { LargeImageItem } from "./largeimageitem";
import { TextItem } from "./textitem";

export function WrapItem(model: model) {
    if (model.item.image_list && model.item.image_list.length) {
        return <ImageListItem item={model.item} key={model.item.item_id}/>
    }
    else if (model.item.image_url) {
        return <ImageItem item={model.item} key={model.item.item_id} />
    }
    else if (model.item.large_image_url) {
        return <LargeImageItem item={model.item} key={model.item.item_id} />
    }
    else{
        return <TextItem item={model.item}  key={model.item.item_id}/>
    }
}