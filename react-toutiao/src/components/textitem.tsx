import React from "react"
import { model } from "../model/model";

export function TextItem(model: model) {
    let item = model.item;
    return (
    <a className="item">
        <span className="txttitle">{item.title}</span>
        <div className="txtmeta">
            {
                item.label ? <span className="txtlabel">{item.label}</span> : null
            }
            <span className="txtinfo">{item.source}  {item.comment_count ? `评论 ${item.comment_count}`: ""}</span>
        </div>
    </a>)
}