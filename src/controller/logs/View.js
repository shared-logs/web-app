import React from "react"
import Log from "../../model/Log";
import Detail from "../../view/log/Detail";
import Loading from "../../view/Loading";

export default class View extends React.Component {
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
            Log.get(this.props.match.params.log_id, {"include[]": ["device", "entries", "user"], "entries[count]": "3"}, log => {
                this.setState({ log: log })
            })
        }
    }

    render() {
        const { log } = this.state
        return log ?
            <Detail log={log} {...this.props}/>
            : <Loading/>
    }
}