import React, {Component} from "react"
import Loading from "../Loading";
import {Button, Form} from "react-bootstrap";
import EntryView from "../entry/component";
import EntriesView from "../entry/list";

export default class Log extends Component {
    render() {
        const {mode, log} = this.props
        const device = this.props.device || log.device

        if (!device) return <Loading mode={mode}/>

        if (mode === "create") return (
            <div className="log create">
                <Form>
                    <h4>New log</h4>
                    <p>You would like to create a log</p>
                    <Button bsStyle="primary" type="submit">Yup!</Button>
                </Form>
            </div>
        )

        if (!log) return <Loading mode={mode}/>

        switch(mode) {
            case "inline":
                return <span className="log inline">{log.name} <small>{device.name}</small></span>
            case "thumb":
                return (
                    <div className="log thumb">
                        <p>
                            {log.name}<br/>
                            <small>{device.name}</small>
                        </p>
                    </div>
                )
            case "edit":
                return (
                    <div className="log edit">
                        <Form>
                            <h4>{log.name}</h4>
                            <p>You would like to edit this log</p>
                            <Button bsStyle="primary" type="submit">Yup!</Button>
                        </Form>
                    </div>
                )
            case "full":
            default:
                return (
                    <div className="log full">
                        <h4>{log.name}</h4>
                        <EntryView mode="create" log_data={log} device_data={device}/>
                        <EntriesView log_data={log} device_data={device}/>
                    </div>
                )
        }
    }
}