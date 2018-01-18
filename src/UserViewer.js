import React from "react"

export default class UserViewer extends React.Component {
    render() {
        const { user } = this.props
        return <div>
            <h1>{user.name}</h1>
        </div>
    }
}