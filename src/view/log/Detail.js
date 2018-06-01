import React from "react"
import {PageHeader} from "react-bootstrap";
import EntryDetailList from "../entries/Detail";
import {Link} from "react-router-dom";

export default class Detail extends React.Component {
    render() {
        const {log} = this.props
        return <div>
            <PageHeader>{log.name} {log.device ? <small><Link to={`/devices/${log.device.id}`}>{log.device.name}</Link></small> : ""}</PageHeader>
            {log.entries ? <EntryDetailList entries={log.entries} {...this.props}/> : ""}
        </div>
    }
}