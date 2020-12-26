import React from "react"

export interface ToastProps{
    cnt: number
}

export function Toast(props: ToastProps) {
    return <span className="toast">{`为你推荐了${props.cnt}篇文章`}</span>
}