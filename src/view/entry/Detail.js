import React from "react"
import Thumbnail from "../user/Thumbnail";

export default class Detail extends React.Component {
    render() {
        const {entry} = this.props
        return <div className="entry">
            <h3>{entry.created} {entry.title}</h3>
            <p>{entry.detail}</p>
            {entry.modified !== entry.created ? <p>Modified {entry.modified}</p> : ""}
            {entry.user ? <Thumbnail user={entry.user} {...this.props}/> : ""}
        </div>
    }
}