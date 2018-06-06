import React from "react"
import Thumbnail from "../user/Thumbnail"
import {humanDate} from "../utils"
import Markdown from "react-markdown-it"

export default class Detail extends React.Component {
    render() {
        const {entry} = this.props
        return <div>
            <h4>{entry.title}</h4>
            <p><small>{humanDate(entry.created)}</small></p>
            <Markdown source={entry.detail}/>
            {entry.user ? <Thumbnail user={entry.user} {...this.props}/> : ""}
            {entry.modified !== entry.created ? <p><small>Modified {humanDate(entry.modified)}</small></p> : ""}
        </div>
    }
}
