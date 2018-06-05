import React from "react"
import Entry from "../../model/Entry";
import {Button, Form, FormFeedback, FormGroup, Input, Label} from "reactstrap";

export default class Edit extends  React.Component {
    static get SUBMIT() {
        return "submit_entry"
    }

    static get VALIDATE() {
        return "validate_entry"
    }

    render() {
        const {entry, handlers, validators, feedback} = this.props
        return <Form onSubmit={handlers[Edit.SUBMIT]}>
            <FormGroup>
                <Label>{Entry.TITLE}</Label>
                <Input type="text" id={Entry.TITLE} value={entry[Entry.TITLE]} placeholder="Good, descriptive title" onChange={handlers[Entry.TITLE]} {...validators[Entry.TITLE]()}/>
                <FormFeedback>{feedback[Entry.TITLE]}</FormFeedback>
            </FormGroup>
            <FormGroup>
                <Label>{Entry.DETAIL}</Label>
                <Input type="textarea" id={Entry.DETAIL} value={entry[Entry.DETAIL]} placeholder="Detailed description of what happened" onChange={handlers[Entry.DETAIL]} {...validators[Entry.DETAIL]()}/>
                <FormFeedback>{feedback[Entry.DETAIL]}</FormFeedback>
            </FormGroup>
            <FormGroup>
                <Button color="primary" type="submit" {...validators[Edit.VALIDATE]()}>Save</Button>
            </FormGroup>
        </Form>
    }
}