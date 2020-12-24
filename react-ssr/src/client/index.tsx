import React from "react";
import * as ReactDOM from "react-dom"
import { Detail } from "../components/detail";

ReactDOM.hydrate(<Detail props={(window as any).initState}/>,  document.getElementById("root"))