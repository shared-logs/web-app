import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter} from "react-router-dom"
import App from "./controller/App";

ReactDOM.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
)