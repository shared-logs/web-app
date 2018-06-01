import React from "react"
import LogThumbnailList from "../log/ThumbnailList";
import {PageHeader} from "react-bootstrap";

export default class Detail extends React.Component {
    render() {
        const {device} = this.props
        return <div>
            <PageHeader>{device.name}</PageHeader>
            <dl>
                <dd>ID {device.id}</dd>
                <dd>{device.manufacturer} {device.model}</dd>
                <dd>created {device.created}</dd>
                <dd>modified {device.modified}</dd>
                {device.logs ? <dd><LogThumbnailList logs={device.logs} {...this.props}/></dd> : ""}
            </dl>
        </div>
    }
}