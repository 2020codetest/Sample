import React from "react"

export interface Topic {
    name: string;
    id: string;
    sel: boolean;
}

export interface TopicList {
    list: Topic[];
}

export function Menu(list: TopicList) {
    return (
        <div className="menu">
            <div className="menumore">
                <div className="cross"></div>
            </div>
            {
                list.list.map((item: Topic) => {
                    let className = "menuitem"
                    if (item.sel) {
                        className += " menucur"
                    }

                    return (
                        <span className={className} key={item.name}>{item.name}</span>
                    )
                })
            }
        </div>
    )
}