import React from "react"
import { image } from "../model/image";
import { model } from "../model/model";

export function ImageListItem(model: model) {
    let item = model.item
    return (
    <div className="item">
        <span className="txttitle">{item.title}</span>
        <ul className="innerimglist">
            {
                item.image_list.map((img: image) => {
                    return (<li className="innerimgholder" key={img.url}><img src={img.url} className="innerimg"/></li>)
                })
            }
        </ul>
        <div className="txtmeta">
            {
                item.label ? <span className="txtlabel">{item.label}</span> : null
            }
            <span className="txtinfo">{item.source}  {item.comment_count ? `评论 ${item.comment_count}`: ""}</span>
        </div>
    </div>
    )
}