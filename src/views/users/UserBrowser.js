import React from "react"
import {Table} from "react-bootstrap";
import User from "../../model/User";

export default class UserBrowser extends React.Component {
    constructor(props) {
        super(props)
        this.state = { users: [] }
    }

    componentDidMount() {
        User.all(null, list => {
            this.setState({ users: list })
        })
    }

    render() {
        return (
            <Table striped hover>
                <tbody>
                {this.state.users.map(user => (
                    <tr key={user.id}>
                        <td>
                            {user.name}
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        )
    }
}