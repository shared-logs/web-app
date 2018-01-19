import React from "react"
import User from "../../model/User";

export default class UserViewer extends React.Component {
    render() {
        const user = this.props.user || this.props.auth.user
        return <div>
            <h1>{user.name}</h1>
            <dl>
                <dt>{User.SCREEN_NAME}</dt>
                <dd>{user.screen_name}</dd>
                <dt>{User.FIRST_NAME}</dt>
                <dd>{user.first_name}</dd>
                <dt>{User.LAST_NAME}</dt>
                <dd>{user.last_name}</dd>
            </dl>
        </div>
    }
}