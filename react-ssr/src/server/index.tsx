import React from 'react'
import {renderToStaticMarkup} from "react-dom/server"
import { Detail } from './detail';
import {List} from "./list"
import { ItemData, ListData } from './model';

function getList(list: ListData) {
    return renderToStaticMarkup(<List items={list.items} />);
}

function getDetail(item: ItemData) {
    return renderToStaticMarkup(<Detail title={item.title} img={item.img}/>)
}

module.exports = {
    getList: getList,
    getDetail: getDetail
};
