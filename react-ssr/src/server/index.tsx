import React from 'react'
import {renderToString} from "react-dom/server"
import { Detail } from '../components/detail';
import {List} from "../components/list"
import { DetailData, ItemData, ListData } from '../components/model';

function getList(list: ListData) {
    return renderToString(<List items={list.items} />);
}

function getDetail(item: DetailData) {
    return renderToString(<Detail props={item.props}/>)
}

module.exports = {
    getList: getList,
    getDetail: getDetail
};
