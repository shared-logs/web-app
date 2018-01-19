import React from "react"
import {Table} from "react-bootstrap";
import Log from "../../model/Log";
import {Link} from "react-router-dom";

export default class LogBrowser extends React.Component {
    constructor(props) {
        super(props)
        this.state = { logs: [] }
    }

    componentDidMount() {
        Log.listForDevice(this.props.match.params.device_id, list => {
            this.setState({logs: list})
        })
    }

    render() {
        const { match } = this.props
        return <Table striped hover>
            <tbody>
            {this.state.logs.map(log => (
                <tr key={log.id}>
                    <td>
                        <Link to={match.url + "/logs/" + log.id}>
                            {log.name}
                        </Link>
                    </td>
                </tr>
            ))}
            </tbody>
        </Table>
    }
}