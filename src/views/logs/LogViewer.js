import React from "react"
import EntryBrowser from "../entries/EntryBrowser";
import Log from "../../model/Log";
import {Button} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

export default class LogViewer extends React.Component {
    constructor(props) {
        super(props)
        if (props.log) {
            this.state = { log: props.log }
        } else {
            this.state = {}
        }
    }

    componentDidMount() {
        if (!this.state.log) {
            Log.get(this.props.match.params.log_id, null, log => {
                this.setState({ log: log })
            })
        }
    }

    render() {
        const { match } = this.props
        const { log } = this.state
        return log ? <div>
            <h3>{log.name}</h3>
                <LinkContainer to={match.url + "/add"}>
                    <Button>Add</Button>
                </LinkContainer>
            {(log.entries ? <EntryBrowser entries={log.entries} {...this.props} /> : "" )}
        </div>
            : <p>Loading</p>
    }
}