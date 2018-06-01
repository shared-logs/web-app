import React from "react"

export default class Thumbnail extends React.Component {
    render() {
        const {user} = this.props
        return <p>{user.name}</p>
    }
}