import React from "react"
import * as ReactDOM from "react-dom"
import { App } from "../components/app"
import "../style/index.css"

(window as any).firstData = true
ReactDOM.render(<App />, document.getElementById("root"))