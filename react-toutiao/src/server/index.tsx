import React from "react"
import {renderToString} from "react-dom/server"
import { App } from "../components/app"


function getRenderContent(): string {
    return renderToString(<App />)
}

module.exports = {
    getRenderContent: getRenderContent
}