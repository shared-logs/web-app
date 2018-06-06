import React from "react"
import DeviceThumbnail from "../device/Thumbnail"
import EntriesThumbnail from "../entries/Thumbnail"
import {Link} from "react-router-dom";
import ButtonAdd from "../entry/ButtonAdd";

export default class Thumbnail extends React.Component {
    render() {
        const {log} = this.props
        return <div>
            <div className="clearfix">
                <ButtonAdd device={{id: log.device_id}} log={log} caption={true}/>
                <Link to={`/devices/${log.device_id}/logs/${log.id}`}>{log.name}</Link>&nbsp;
            </div>
            <div>
                {log.device ? <DeviceThumbnail device={log.device} {...this.props}/> : ""}
                {log.entries ? <EntriesThumbnail entries={log.entries} {...this.props}/> : ""}
            </div>
        </div>
    }
}