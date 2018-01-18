import React from "react"

export default class EntryViewer extends React.Component {
    render() {
        const { entry } = this.props
        if (entry) {
            return <p>{entry.name}</p>
        } else {
            return <p>Loading</p>
        }
    }
}