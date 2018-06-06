import React from "react"
import LogThumbnail from "../log/Thumbnail"
import UserThumbnail from "../user/Thumbnail"
import Markdown from "react-markdown-it"
import {humanDate} from "../utils";

export default class Thumbnail extends React.Component {
    static get PREVIEW_LENGTH() {
        return 250
    }
    render() {
        const {entry} = this.props
        return <div>
            {entry.log ? <div><LogThumbnail log={entry.log} {...this.props}/></div> : ""}
            <h5>{entry.title}</h5>
            <div><small>{humanDate(entry.created)}</small></div>
            <Markdown source={entry.detail.substr(0, Thumbnail.PREVIEW_LENGTH) + (entry.detail.length > Thumbnail.PREVIEW_LENGTH ? "..." : "")}/>q
            {entry.modified !== entry.created ? <div><small>Modified {humanDate(entry.modified)}</small></div> : ""}
            {entry.user ? <div><UserThumbnail user={entry.user} {...this.props}/></div> : ""}
        </div>
    }
}
