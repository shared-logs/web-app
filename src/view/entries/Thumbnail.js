import React from "react"
import EntryThumbnail from "../entry/Thumbnail";

export default class Thumbnail extends React.Component {
    render() {
        const {entries} = this.props
        return <div>
            {entries.map(entry => (
                <EntryThumbnail key={entry.id} entry={entry} {...this.props}/>
            ))}
        </div>
    }
}