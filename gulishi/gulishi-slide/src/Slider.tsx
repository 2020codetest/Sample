import {ImageInfo, SlideItem} from "./SlideItem"
import React from "react"
import {Swiper, SwiperSlide} from "swiper/react"
import SwiperCore, {Navigation, Pagination, Autoplay} from "swiper"

SwiperCore.use([Navigation, Pagination, Autoplay])
export interface SliderItemArr {
    items: ImageInfo[];
}

export function Slider(props: SliderItemArr) {
    return(
        <Swiper
            autoplay = {{
                disableOnInteraction: false
            }}
            navigation
            pagination={{clickable: true}}
        >
            {
                props.items.map(item => {
                    return <SwiperSlide key={item.url}><SlideItem {...item}/></SwiperSlide>
                })
            }
        </Swiper>
      )
}