import React from "react"
import {Table} from "react-bootstrap";
import Device from "../../model/Device";
import {Link} from "react-router-dom";

export default class DeviceBrowser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {devices: []}
    }

    componentDidMount() {
        Device.all((list) => {
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
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        )
    }
}