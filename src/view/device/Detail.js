import React from "react"
import LogsThumbnail from "../logs/Thumbnail";
import {humanDate} from "../utils";

export default class Detail extends React.Component {
    render() {
        const {device} = this.props
        return <div>
            <h1>{device.name} <small>{device.manufacturer} {device.model}</small></h1>
            <p><small>Created {humanDate(device.created)}</small></p>
            {device.modified !== device.created ? <p><small>Modified {humanDate(device.modified)}</small></p> : ""}
            {device.logs ? <LogsThumbnail logs={device.logs} {...this.props}/> : ""}
        </div>
    }
}