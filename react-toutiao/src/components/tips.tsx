import React from "react"

export interface TipsProps{
    msg: string;
}

export function Tips(props: TipsProps){
    return <span>{props.msg}</span>
}