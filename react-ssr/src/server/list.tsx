import React from "react";
import { ItemData, ListData } from "./model";

export function List(list: ListData) {
    return (<ul>
        {
            list.items.map((item: ItemData) => {
                return <li>item.title</li>
            })
        }</ul>)
}