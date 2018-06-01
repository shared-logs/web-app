import React from "react"
import LogsThumbnailList from "../log/ThumbnailList"
import {Link} from "react-router-dom";

export default class Thumbnail extends React.Component {
    render() {
        const {device} = this.props
        return <dl>
            <dt>
                <Link to={`/devices/${device.id}`}>{device.name}</Link>
            </dt>
            <dd>
                {device.logs ? <LogsThumbnailList logs={device.logs} {...this.props}/> : ""}
            </dd>
        </dl>
    }
}
