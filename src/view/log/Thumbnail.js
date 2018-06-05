import React from "react"
import DeviceThumbnail from "../device/Thumbnail"
import EntriesThumbnail from "../entries/Thumbnail"
import {Link} from "react-router-dom";
import {Button} from "reactstrap";

export default class Thumbnail extends React.Component {
    render() {
        const {log} = this.props
        return <dl className="log thumbnail">
            <dt>
                <Link to={`/devices/${log.device_id}/logs/${log.id}`}>{log.name}</Link>&nbsp;
                <Link to={`/devices/${log.device_id}/logs/${log.id}/add`}>
                    <Button color="primary" size="sm">Add an Entry</Button>
                </Link>
            </dt>
            <dd>
                {log.device ? <DeviceThumbnail device={log.device} {...this.props}/> : ""}
                {log.entries ? <EntriesThumbnail entries={log.entries} {...this.props}/> : ""}
            </dd>
        </dl>
    }
}