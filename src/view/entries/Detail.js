import React from "react"
import EntryDetail from "../entry/Detail";

export default class Detail extends React.Component {
    render() {
        const {entries} = this.props
        return <div className="entry">
            {entries.map(entry => (
                <EntryDetail key={entry.id} entry={entry} {...this.props}/>
            ))}
        </div>
    }
}