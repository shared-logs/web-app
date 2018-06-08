import React from "react"
import Entries from "../entries/Detail";
import {Link} from "react-router-dom";
import ButtonAdd from "../entry/ButtonAdd";
import Shortcut from "../ui/Shortcut";

export default class Detail extends React.Component {
    render() {
        const {log} = this.props
        return <div className="log">
            <Shortcut title={log.device.name} subtitle={log.name} className="float-right" />
            <ButtonAdd device={log.device} log={log} caption={true}/>
            <h1>{log.name} {log.device ? <small><Link to={`/devices/${log.device.id}`}>{log.device.name}</Link></small> : ""}</h1>
            {log.entries ? <Entries entries={log.entries} {...this.props}/> : ""}
        </div>
    }
}