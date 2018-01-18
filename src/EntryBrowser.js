import React from "react"
import Entry from "./model/Entry";
import {PanelGroup} from "react-bootstrap";
import EntryViewer from "./EntryViewer";

export default class EntryBrowser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {entries: []}
    }

    componentDidMount() {
        Entry.listForLog(this.props.match.params.log_id, list => {
            this.setState({entries: list})
        })
    }

    render() {
        return <PanelGroup>
            {this.state.entries.map(entry => (
                <EntryViewer key={entry.id} entry={entry}/>
            ))}
        </PanelGroup>
    }
}