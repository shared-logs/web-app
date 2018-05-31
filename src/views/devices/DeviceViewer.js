import React from "react"
import Device from "../../model/Device";
import LogBrowser from "../logs/LogBrowser";

export default class DeviceViewer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        Device.get(this.props.match.params.device_id, null, device => {
            this.setState({ device: device })
        })
    }

    render() {
        const {device} = this.state
        return device
            ? <div>
                {device.name}
                <LogBrowser {...this.props}/>
            </div>
            : <p>Loading</p>
    }
}