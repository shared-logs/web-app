import React from "react"
import LogsThumbnail from "../logs/Thumbnail";
import UrlThumbnail from "../url/Thumbnail"
import {humanDate} from "../utils";
import Shortcut from "../ui/Shortcut";

export default class Detail extends React.Component {
    render() {
        const {device} = this.props
        return <div>
            <Shortcut title={device.name} subtitle={`${device.manufacturer} ${device.model}`} className="float-right" />
            <h1>{device.name} <small>{device.manufacturer} {device.model}</small></h1>
            <p><small>Created {humanDate(device.created)}</small></p>
            {device.modified !== device.created ? <p><small>Modified {humanDate(device.modified)}</small></p> : ""}
            {device.urls ? device.urls.map(url => (
                <UrlThumbnail url={url} {...this.props}/>
                )): ""}
            {device.logs ? <LogsThumbnail logs={device.logs} {...this.props}/> : ""}
        </div>
    }
}