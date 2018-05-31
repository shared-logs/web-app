import React from "react"
import {Table} from "react-bootstrap";
import Device from "../../model/Device";
import {Link} from "react-router-dom";
import LogBrowser from "../logs/LogBrowser";

export default class DeviceBrowser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {devices: []}
    }

    componentDidMount() {
        Device.all({"include[]": ["logs", "recent", "user"]}, (list) => {
            this.setState({devices: list})
        })
    }

    render() {
        const {match} = this.props
        const {devices} = this.state
        return (
            <Table striped hover>
                <tbody>
                {devices.map(device => (
                    <tr key={device.id}>
                        <td>
                            <Link to={match.url + "/" + device.id}>
                                {device.name}
                            </Link>
                            {(device.logs ? <LogBrowser logs={device.logs} {...this.props}/> : "" )}
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        )
    }
}