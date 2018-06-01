import React from "react"
import LogThumbnail from "../log/Thumbnail"
import UserThumbnail from "../user/Thumbnail"

export default class Thumbnail extends React.Component {
    render() {
        const {entry} = this.props
        return <dl>
            {entry.log ? <dt><LogThumbnail log={entry.log} {...this.props}/></dt> : ""}
            <dt>{entry.created} {entry.title}</dt>
            <dd>{entry.detail.substr(0, 100)}{entry.detail.length > 100 ? <span>&hellip;</span> : ""}</dd>
            {entry.modified !== entry.created ? <dd>Modified {entry.modified}</dd> : ""}
            {entry.user ? <dd><UserThumbnail user={entry.user} {...this.props}/></dd> : ""}
        </dl>
    }
}