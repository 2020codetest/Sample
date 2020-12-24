import React from "react"
import { ItemData } from "./model"
export function Detail(item: ItemData) {
    return <div>{item.title}</div>
}