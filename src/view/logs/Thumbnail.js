import React from "react"
import LogThumbnail from "../log/Thumbnail"

export default class Thumbnail extends React.Component {
    render() {
        const {logs} = this.props
        return <ul className="logs thumbnail">
            {logs.map(log => (
                <li key={log.id}>
                    <LogThumbnail log={log} {...this.props}/>
                </li>
            ))}
        </ul>
    }
}