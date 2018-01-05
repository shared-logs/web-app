import React, {Component} from "react"
import DevicesView from "../../components/device/list";
import Navigation from "../Navigation";
import Device from "../../model/Device";

export default class DeviceBrowser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            devices: []
        }
    }

    componentDidMount() {
        Device.all(list => {
            this.setState({ devices: list })
        })
    }

    render = () => (
        <div id="browse-devices">
            <Navigation up="#" title="Shared Logs" icon="home" user={this.props.user}/>
            <div className="container">
                <DevicesView match={this.props.match} devices={this.state.devices}/>
            </div>
        </div>
    )
}