import React from "react"
import { model } from "../model/model"

export function ImageItem(model: model) {
    let item = model.item
    return (
    <a className="item imgitem">
        <div className="txtitemwrap">
            <span className="txttitle">{item.title}</span>
            <div className="txtmeta">
                {
                    item.label ? <span className="txtlabel">{item.label}</span> : null
                }
                <span className="txtinfo">{item.source}  {item.comment_count ? `评论 ${item.comment_count}`: ""}</span>
            </div>
        </div>
        <div className="innerimgholder" ><img src={item.image_url} className="innerimg"/></div>
    </a>
    )
}