import React from "react"
import LogsThumbnail from "../logs/Thumbnail";

export default class Detail extends React.Component {
    render() {
        const {device} = this.props
        return <div className="device">
            <h1>{device.name}</h1>
            <dl>
                <dd>ID {device.id}</dd>
                <dd>{device.manufacturer} {device.model}</dd>
                <dd>created {device.created}</dd>
                <dd>modified {device.modified}</dd>
                {device.logs ? <dd><LogsThumbnail logs={device.logs} {...this.props}/></dd> : ""}
            </dl>
        </div>
    }
}