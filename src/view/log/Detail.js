import React from "react"
import Entries from "../entries/Detail";
import {Link} from "react-router-dom";
import {Button} from "reactstrap";

export default class Detail extends React.Component {
    render() {
        const {log} = this.props
        return <div className="log">
            <h1>{log.name} {log.device ? <small><Link to={`/devices/${log.device.id}`}>{log.device.name}</Link></small> : ""}</h1>
            <Link to={`${this.props.match.url}/add`}>
                <Button color="primary">Add an Entry</Button>
            </Link>
            {log.entries ? <Entries entries={log.entries} {...this.props}/> : ""}
        </div>
    }
}