import React from "react"
import Device from "../../../model/Device";
import Detail from "../../../view/device/Detail";
import Loading from "../../../view/Loading";

export default class View extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        Device.get(this.props.match.params.device_id, {"include[]": ["logs", "entries", "user"]}, device => {
            this.setState({ device: device })
        })
    }

    render() {
        const {device} = this.state
        return device
            ? <Detail device={device} {...this.props}/>
            : <Loading/>
    }
}