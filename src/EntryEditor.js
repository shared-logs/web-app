import React from "react"
import {Button, ControlLabel, Form, FormControl, FormGroup} from "react-bootstrap";
import Entry from "./model/Entry";
import Authentication from "./Authentication";

export default class EntryEditor extends  React.Component {
    constructor(props) {
        super(props)
        this.state = this.resetEntry(true);
        this.auth = new Authentication()
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    resetEntry(toBeReturned = false) {
        var blankForm = {
            [Entry.TITLE]: "",
            [Entry.DETAIL]: ""
        }
        if (toBeReturned) return blankForm
        else this.setState(blankForm);
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault()
        Entry.create({
            [Entry.TITLE]: this.state.title,
            [Entry.DETAIL]: this.state.detail,
            [Entry.LOG_ID]: this.props.match.params.log_id,
            [Entry.USER_ID]: this.auth.currentUser().id
        }, entry => {
            this.processSubmit(entry)
        })
    }

    processSubmit(entry) {
        if (entry) {
            if (this.props.onSubmit) {
                this.props.onSubmit(entry)
            }
        }
    }

    validateTitle() {
        if (this.state[Entry.TITLE].length > 0) return "success"
        else return "error"
    }

    render() {
        return <Form onSubmit={this.handleSubmit}>
            <FormGroup controlId={Entry.TITLE} validationState={this.validateTitle()}>
                <ControlLabel>{Entry.TITLE}</ControlLabel>
                <FormControl type="text" value={this.state[Entry.TITLE]} placeholder="Good, descriptive title" onChange={this.handleChange}/>
                <FormControl.Feedback/>
            </FormGroup>
            <FormGroup controlId={Entry.DETAIL}>
                <ControlLabel>{Entry.DETAIL}</ControlLabel>
                <FormControl componentClass="textarea" value={this.state[Entry.DETAIL]} placeholder="Detailed description of what happened" onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup>
                <Button type="submit">Save</Button>
            </FormGroup>
        </Form>
    }
}