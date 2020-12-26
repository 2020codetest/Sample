import React, { useEffect, useState } from "react"
import { Menu, Topic, TopicList } from "./menu"
import { PageHeader } from "./pageHeader"
import { Content } from "./content"
import { item } from "../model/item"
import {response} from "../model/response"
import { fetchData } from "../model/datafetcher"
import { Toast } from "./toast"

const defaultList: Topic[] = [
    {
        name: "推荐",
        id: "0",
        sel: true
    },
    {
        name: "视频",
        id: "0",
        sel: false
    },
    {
        name: "热点",
        id: "0",
        sel: false
    },
    {
        name: "社会",
        id: "0",
        sel: false
    },
    {
        name: "娱乐",
        id: "0",
        sel: false
    },
    {
        name: "军事",
        id: "0",
        sel: false
    },
    {
        name: "科技",
        id: "0",
        sel: false
    },
    {
        name: "汽车",
        id: "0",
        sel: false
    },
    {
        name: "家居",
        id: "0",
        sel: false
    },
    {
        name: "体育",
        id: "0",
        sel: false
    },
    {
        name: "财经",
        id: "0",
        sel: false
    },
]

export interface AppProps{
    first: boolean;
}

function showToast(showNot: React.Dispatch<React.SetStateAction<boolean>>, setCnt: React.Dispatch<React.SetStateAction<number>>, cnt: number) {
    showNot(true)
    setCnt(cnt)
    setTimeout(() => {
        showNot(false)
    }, 1500)
}

export function App() {
    const [list, setList] = useState(defaultList)
    const [response, setResponse] = useState<response>({data: []})
    const [notification, setNotification] = useState(false)
    const [newCnt, setNewCnt] = useState(0)
    if (_IS_CLIENT_BUILD && (window as any).firstData) {
        delete (window as any).firstData
        fetchData().then(newResponse => {
            setResponse(newResponse)
            showToast(setNotification, setNewCnt, newResponse.data.length)
        })
    }

    const fetch: () => void = () => {
        fetchData(1).then(newResponse => {
            if (!newResponse.data.length) {
                return;
            }

            showToast(setNotification, setNewCnt, newResponse.data.length)
            setResponse({data: response.data.concat(newResponse.data)})
        })
    }

    return (
        <React.Fragment>
            <PageHeader />
            <Menu list={list} />
            {
                notification ? <Toast cnt={newCnt} /> : null
            }
            <Content resp={response} fetch={fetch}/>
        </React.Fragment>
    )
}