import React from "react"
import Entry from "./model/Entry";
import EntryViewer from "./EntryViewer";
import {Table} from "react-bootstrap";

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
        return <Table striped hover>
            <tbody>
            {this.state.entries.map(entry => (
                <tr key={entry.id}><td><EntryViewer entry={entry}/></td></tr>
            ))}
            </tbody>
        </Table>
    }
}