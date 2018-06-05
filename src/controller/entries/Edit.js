import React from "react"
import Entry from "../../model/Entry";
import {Button, Form, FormFeedback, FormGroup, Input, Label} from "reactstrap";

export default class Edit extends  React.Component {
    constructor(props) {
        super(props)
        this.state = this.resetEntry(true);
        this.feedback = {
            [Entry.TITLE]: "",
            [Entry.DETAIL]: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    resetEntry(toBeReturned = false) {
        const blankForm = {
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
        const { match, auth, history } = this.props
        Entry.create({
            [Entry.TITLE]: this.state.title,
            [Entry.DETAIL]: this.state.detail,
            [Entry.LOG_ID]: match.params.log_id,
            [Entry.USER_ID]: auth.user.id
        }, entry => {
            this.processSubmit(entry)
            history.goBack();
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
        if (this.state[Entry.TITLE].length > 0) {
            this.feedback[Entry.TITLE] = ""
            return {valid: true}
        } else {
            this.feedback[Entry.TITLE] = "A good, clear title is required!"
            return {invalid: true}
        }
    }

    validateDetail() {
        if (this.state[Entry.DETAIL].length > 0) {
            this.feedback[Entry.DETAIL] = ""
            return {valid: true}
        } else {
            this.feedback[Entry.DETAIL] = "A clear, detailed description is required!"
            return {invalid: true}
        }
    }

    render() {
        return <Form onSubmit={this.handleSubmit}>
            <FormGroup>
                <Label>{Entry.TITLE}</Label>
                <Input type="text" id={Entry.TITLE} value={this.state[Entry.TITLE]} placeholder="Good, descriptive title" onChange={this.handleChange} {...this.validateTitle()}/>
                <FormFeedback>{this.feedback[Entry.TITLE]}</FormFeedback>
            </FormGroup>
            <FormGroup>
                <Label>{Entry.DETAIL}</Label>
                <Input type="textarea" id={Entry.DETAIL} value={this.state[Entry.DETAIL]} placeholder="Detailed description of what happened" onChange={this.handleChange} {...this.validateDetail()}/>
                <FormFeedback>{this.feedback[Entry.DETAIL]}</FormFeedback>
            </FormGroup>
            <FormGroup>
                <Button type="submit">Save</Button>
            </FormGroup>
        </Form>
    }
}