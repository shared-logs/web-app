import React from "react"

export default class Thumbnail extends React.Component {
    render() {
        const {user} = this.props
        return <p className="user thumbnail">{user.name}</p>
    }
}