import React from "react"
import Entries from "../entries/Detail";
import {Link} from "react-router-dom";
import {Button} from "reactstrap";

export default class Detail extends React.Component {
    render() {
        const {log} = this.props
        return <div className="log">
            <h1>{log.name} {log.device ? <small><Link to={`/devices/${log.device.id}`}>{log.device.name}</Link></small> : ""}</h1>
            <Button href={`/devices/${log.device_id}/logs/${log.id}/add`}>Add an Entry</Button>
            {log.entries ? <Entries entries={log.entries} {...this.props}/> : ""}
        </div>
    }
}