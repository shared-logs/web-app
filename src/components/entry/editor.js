import React, {Component} from "react"
import {Button, ControlLabel, Form, FormControl, FormGroup, Panel} from "react-bootstrap";
import Entry from "../../model/Entry";

export default class EntryEditor extends Component {
    constructor(props) {
        super(props)
        this.state = { [Entry.TITLE]: "" }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleApiResponse = this.handleApiResponse.bind(this)
    }

    componentDidMount() {
        this.resetForm()
    }

    resetForm() {
        if (this.props.entry) {
            this.setState({
                [Entry.TITLE]: this.props.entry[Entry.TITLE] || "",
                [Entry.DETAIL]: this.props.entry[Entry.DETAIL] || "",
                [Entry.LOG_ID]: this.props.entry[Entry.LOG_ID],
                [Entry.USER_ID]: this.props.user.id
            })
        } else {
            this.setState({
                [Entry.TITLE]: "",
                [Entry.DETAIL]: "",
                [Entry.LOG_ID]: this.props.log.id,
                [Entry.USER_ID]: this.props.user.id
            })
        }
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault()
        const params = {
            title: this.state.title,
            detail: this.state.detail,
            user_id: this.state.user_id,
            log_id: this.state.log_id
        }
        if (this.props.entry) {
            Entry.update(this.props.entry.id, params, this.handleApiResponse)
        } else {
            Entry.create(params, this.handleApiResponse)
        }
    }

    handleApiResponse(entry) {
        if (entry.user_id === this.props.user.id) {
            entry.user = this.props.user
        }
        if (this.props.onSubmit) this.props.onSubmit(entry)
        this.resetForm()
    }

    validateTitle() {
        if (this.state[Entry.TITLE].length > 0) return "success"
        else return "error"
    }

    render() {
        return (
            <Panel header="New entry">
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup
                        controlId={Entry.TITLE}
                        validationState={this.validateTitle()}
                    >
                        <ControlLabel>Title</ControlLabel>
                        <FormControl
                            type="text"
                            value={this.state.title}
                            placeholder="Entries need good titles"
                            onChange={this.handleChange}
                        />
                        <FormControl.Feedback/>
                    </FormGroup>
                    <FormGroup
                        controlId={Entry.DETAIL}
                    >
                        <ControlLabel>Detail</ControlLabel>
                        <FormControl
                            componentClass="textarea"
                            value={this.state.detail}
                            placeholder="Describe what happened"
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <Button type="submit" bsStyle="primary">Save Entry</Button>
                </Form>
            </Panel>
        )
    }
}