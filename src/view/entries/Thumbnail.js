import React from "react"
import EntryThumbnail from "../entry/Thumbnail";

export default class Thumbnail extends React.Component {
    render() {
        const {entries} = this.props
        return <dl>
            {entries.map(entry => (
                <dd key={entry.id}>
                    <EntryThumbnail entry={entry} {...this.props}/>
                </dd>
            ))}
        </dl>
    }
}