import React, { useRef } from "react"
import { item } from "../model/item"
import { response } from "../model/response"
import { WrapItem } from "./wrapitem"

function touchEnd(content: React.MutableRefObject<HTMLDivElement|null>, fetch: () => void) {
    const ele = content.current!
    if (ele.scrollTop + ele.clientHeight + 100 >= ele.scrollHeight) {
        fetch()
    }
}

export interface ContentProps {
    resp: response;
    fetch: () => void;
}

export function Content(props: ContentProps) {
    const contentRef : React.MutableRefObject<HTMLDivElement|null> = useRef(null)
    return (
        <div className="content" onTouchEnd={() => {touchEnd(contentRef, props.fetch)}} ref={contentRef}>
            {
                props.resp.data && props.resp.data.length ?
                props.resp.data.map((item: item) => {
                    return <WrapItem item={item} key={item.item_id} />
                })
                : <span className="txttitle loading">加载中...</span>
            }
        </div>
    )
}