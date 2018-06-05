import React from "react"
import EntryThumbnail from "../entry/Thumbnail";

export default class Thumbnail extends React.Component {
    render() {
        const {entries} = this.props
        return <ul className="entries thumbnail">
            {entries.map(entry => (
                <li key={entry.id}>
                    <EntryThumbnail entry={entry} {...this.props}/>
                </li>
            ))}
        </ul>
    }
}