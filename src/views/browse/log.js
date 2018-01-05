import React, {Component} from "react"
import DeviceView from "../../components/device/component";
import LogsView from "../../components/log/list";
import Navigation from "../Navigation";
import Log from "../../model/Log";
import Device from "../../model/Device";

export default class LogBrowser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            logs: [],
        }
    }

    componentDidMount() {
        Device.get(this.props.match.params.device_id, device => {
            this.setState({ device: device })
        })
        Log.listForDevice(this.props.match.params.device_id, list => {
            this.setState({ logs: list })
        })
    }

    render() {
        const match = this.props.match
        const {logs, device} = this.state
        return (
            <div id="browse-logs">
                <Navigation up="/devices" title={<DeviceView device={device} mode="inline"/>}
                            user={this.props.user}/>
                <div className="container">
                    <LogsView match={match} device={device} logs={logs}/>
                </div>
            </div>
        )
    }
}