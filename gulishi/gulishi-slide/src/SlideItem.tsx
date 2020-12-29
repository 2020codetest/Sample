import React from "react"

export interface ImageInfo {
    url: string;
}

export function SlideItem(props: ImageInfo) {
    return <img src={props.url} className="swiper-img" />
}
