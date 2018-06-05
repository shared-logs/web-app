import React from "react"
import LogThumbnail from "../log/Thumbnail"
import UserThumbnail from "../user/Thumbnail"

export default class Thumbnail extends React.Component {
    render() {
        const {entry} = this.props
        return <div>
            {entry.log ? <div><LogThumbnail log={entry.log} {...this.props}/></div> : ""}
            <div>{entry.created} {entry.title}</div>
            <div>{entry.detail.substr(0, 100)}{entry.detail.length > 100 ? <span>&hellip;</span> : ""}</div>
            {entry.modified !== entry.created ? <dd>Modified {entry.modified}</dd> : ""}
            {entry.user ? <div><UserThumbnail user={entry.user} {...this.props}/></div> : ""}
        </div>
    }
}