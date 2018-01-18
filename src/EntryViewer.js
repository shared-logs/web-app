import React from "react"

export default class EntryViewer extends React.Component {
    render() {
        const {entry} = this.props
        if (entry) {
            return <div>
                    <h4>{entry.title} <small>{entry.created}</small></h4>
                    <p>{entry.detail}</p>
                <p><small>{entry.user.name}</small></p>
            </div>
        } else {
            return <p>Loading</p>
        }
    }
}