import React from "react"

export default class Detail extends React.Component {
    render() {
        const {user} = this.props
        return <div>
            <h1>{user.name}</h1>
            <dl>
                <dd>{user.first_name} {user.last_name}</dd>
                <dd>{user.screen_name}</dd>
                <dd>{user.email}</dd>
                <dd>Created {user.created}</dd>
                {user.modified !== user.created ? <dd>Modified {user.modified}</dd> : ""}
            </dl>
        </div>
    }
}