import React, {Component} from "react"
import EntriesView from "../../components/entry/list";
import EntryView from "../../components/entry/component";
import Navigation from "../Navigation";
import LogView from "../../components/log/component";
import Entry from "../../model/Entry";
import Log from "../../model/Log";
import Loading from "../../components/Loading";

export default class EntryBrowser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            entries: []
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        const log_id = this.props.match.params.log_id

        Log.get(log_id, log => {
            console.log(log);
            this.setState({ log: log })
        })
        Entry.listForLog(log_id, (list => {
            this.setState({ entries: list })
        }))
    }

    handleSubmit(entry) {
        this.setState({ entries: [entry, ...this.state.entries] })
    }

    render() {
        console.log(this)
        const match = this.props.match
        const {log, entries} = this.state
        if (!log) return <Loading/>
        return (
            <div id="browse-entries">
                <Navigation up={`/devices/${log.device_id}/logs`} title={<LogView log={log} match={match} mode="inline"/>} user={this.props.user}/>
                <div className="container">
                    <EntryView match={match} log={log} user={this.props.user} mode="create" onSubmit={this.handleSubmit}/>
                    <EntriesView match={match} log={log} user={this.props.user} entries={entries}/>
                </div>
            </div>
        )
    }
}