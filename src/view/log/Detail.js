import React from "react"
import Entries from "../entries/Detail";
import {Link} from "react-router-dom";
import ButtonAdd from "../entry/ButtonAdd";

export default class Detail extends React.Component {
    render() {
        const {log} = this.props
        return <div className="log">
            <ButtonAdd device={log.device} log={log} caption={true}/>
            <h1>{log.name} {log.device ? <small><Link to={`/devices/${log.device.id}`}>{log.device.name}</Link></small> : ""}</h1>
            {log.entries ? <Entries entries={log.entries} {...this.props}/> : ""}
        </div>
    }
}