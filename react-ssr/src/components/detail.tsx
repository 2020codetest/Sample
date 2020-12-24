import React, {useEffect, useState} from "react"
import { DetailData } from "./model"
function onClickTest(setTitle: any) {
    setTitle(`Item clicked from client ${new Date().toString()}`)
}
export function Detail(item: DetailData) {
    const [title, setTitle] = useState(item.props.title)
    useEffect(() => {
        delete (window as any).initState;
    }, [])
    return <div onClick={() => onClickTest(setTitle)}>{title}</div>
}