import React from "react"
import { model } from "../model/model"

export function LargeImageItem(model: model) {
    let item = model.item
    return (
    <a className="item">
        <span className="txttitle">{item.title}</span>
        <div className="innerimgholder large" ><img src={item.large_image_url} className="innerimg"/></div>
            <div className="txtmeta">
                {
                    item.label ? <span className="txtlabel">{item.label}</span> : null
                }
                <span className="txtinfo">{item.source}  {item.comment_count ? `评论 ${item.comment_count}`: ""}</span>
        </div>
    </a>
    )
}