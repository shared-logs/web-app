import React, {Component} from "react"
import EntryView from "./component";
import {PanelGroup} from "react-bootstrap";
import Loading from "../Loading";

export default class EntryList extends Component {
    render() {
        const log = this.props.log
        const entries = this.props.entries
        if (!log) return <Loading/>
        return (
            <PanelGroup id="entries">
                {entries.map(entry => (
                    <EntryView key={entry.id} entry={entry} log={log}/>
                ))}
            </PanelGroup>
)
    }
}