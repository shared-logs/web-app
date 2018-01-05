import React, {Component} from "react"
import Loading from "../Loading";
import LogView from "./component";
import {Table} from "react-bootstrap";
import {Link} from "react-router-dom";

export default class LogList extends Component {
    render() {
        const device = this.props.device
        const logs = this.props.logs
        if (!device) return <Loading/>

        return (
            <Table striped hover responsive id="logs">
                <tbody>
                {logs.map(log => (
                    <tr key={log.id}>
                        <td>
                            <Link to={`${this.props.match.url}/${log.id}`}>
                                <LogView log={log} device={device} mode="thumb"/>
                            </Link>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        )
    }
}