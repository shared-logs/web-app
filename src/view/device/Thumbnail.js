import React from "react"
import LogsThumbnail from "../logs/Thumbnail"
import {Link} from "react-router-dom";

export default class Thumbnail extends React.Component {
    render() {
        const {device} = this.props
        return <dl className="device thumbnail">
            <dt>
                <Link to={`/devices/${device.id}`}>{device.name}</Link>
            </dt>
            <dd>
                {device.logs ? <LogsThumbnail logs={device.logs} {...this.props}/> : ""}
            </dd>
        </dl>
    }
}
