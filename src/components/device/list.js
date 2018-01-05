import React, {Component} from "react"
import {Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import DeviceView from "./component";

export default class DeviceList extends Component {
    render() {
        const match = this.props.match
        const devices = this.props.devices
        return (
            <Table striped hover responsive id="devices">
                <tbody>
                {devices.map(device => (
                    <tr key={device.id}>
                        <td>
                            <Link to={`${match.url}/${device.id}/logs`}>
                                <DeviceView match={match} device={device} mode="thumb"/>
                            </Link>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        )
    }
}