import React, {Component} from "react"
import {Panel} from "react-bootstrap";
import Loading from "../Loading";
import UserView from "../user/component";
import EntryForm from "./editor";

export default class Entry extends Component {
    render() {
        const {mode, entry} = this.props
        const log = this.props.log || entry.log
        const user = this.props.user || entry.user

        if (!log) return <Loading mode={mode}/>

        if (mode === "create") return <EntryForm log={log} user={user} onSubmit={this.props.onSubmit}/>

        if (!entry) return <Loading mode={mode}/>

        switch(this.props.mode) {
            case "inline":
                return <span className="entry inline">{entry.title} <small>{entry.created}</small></span>
            case "thumb":
                return (
                    <div className="entry thumb">
                        <p>
                            {entry.title}<br/>
                            <small>{entry.created}</small>
                        </p>
                    </div>
                )
            case "edit":
                return (
                    <Panel collapsible defaultExpanded header={entry.name}>
                        <EntryForm entry={entry} log={log} user={user}/>
                    </Panel>
                )
            case "full":
            default:
                return (
                    <Panel collapsible defaultExpanded header={entry.name} footer={(entry.modified !== entry.created ? `Modified ${entry.modified}` : "")}>
                        <p>{entry.detail}</p>
                        <UserView user={entry.user} mode="thumb"/>
                    </Panel>
                )
        }
    }
}