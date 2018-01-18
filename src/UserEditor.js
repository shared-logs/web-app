import React from "react"
import {Button, ControlLabel, Form, FormControl, FormGroup} from "react-bootstrap";
import User from "./model/User";

export default class UserEditor extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            params: props.user || {
                [User.SCREEN_NAME]: "",
                [User.FIRST_NAME]: "",
                [User.LAST_NAME]: "",
                [User.EMAIL]: ""
            }
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        var { params } = this.state
        params[event.target.id] = event.target.value
        this.setState({ params: params })
        console.log(this.state.params)
    }

    handleSubmit(event) {
        event.preventDefault()
        const { params } = this.state
        const { onSubmit } = this.props
        User.create(params, user => {
            if (onSubmit && typeof onSubmit === "function") onSubmit(user)
        })
    }

    render() {
        const { params } = this.state
        return <Form onSubmit={this.handleSubmit}>
            <FormGroup controlId={User.SCREEN_NAME}>
                <ControlLabel>{User.SCREEN_NAME}</ControlLabel>
                <FormControl type="text" value={params[User.SCREEN_NAME]}/>
            </FormGroup>
            <FormGroup controlId={User.FIRST_NAME}>
                <ControlLabel>{User.FIRST_NAME}</ControlLabel>
                <FormControl type="text" value={params[User.FIRST_NAME]}/>
            </FormGroup>
            <FormGroup controlId={User.LAST_NAME}>
                <ControlLabel>{User.LAST_NAME}</ControlLabel>
                <FormControl type="text" value={params[User.LAST_NAME]}/>
            </FormGroup>
            <FormGroup controlId={User.EMAIL}>
                <ControlLabel>{User.EMAIL}</ControlLabel>
                <FormControl type="text" value={params[User.EMAIL]}/>
            </FormGroup>
            <Button type="submit">Save</Button>
        </Form>
    }
}