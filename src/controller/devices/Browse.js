import React from "react"
import Device from "../../model/Device";
import Thumbnail from "../../view/devices/Thumbnail";
import Loading from "../../view/Loading";

export default class Browse extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        Device.all({"include[]": ["logs", "recent", "user"]}, list => {
            this.setState({devices: list})
        })
    }

    render() {
        const {devices} = this.state
        return devices ?
            <Thumbnail devices={devices} {...this.props}/> :
            <Loading/>
    }
}