import React from "react"
import LogThumbnail from "../log/Thumbnail"

export default class Thumbnail extends React.Component {
    render() {
        const {logs} = this.props
        return <div>
            {logs.map(log => (
                <LogThumbnail key={log.id} log={log} {...this.props}/>
            ))}
        </div>
    }
}