import React from "react"
import FontAwesome from "react-fontawesome"

export default class Thumbnail extends React.Component {
    render() {
        const {user} = this.props
        return <span><FontAwesome name="user-circle"/> {user.name}</span>
    }
}