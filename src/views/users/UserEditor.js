import React from "react"
import {Button, ControlLabel, Form, FormControl, FormGroup} from "react-bootstrap";
import User from "../../model/User";
import {Redirect} from "react-router-dom";

export default class UserEditor extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            submitted: false,
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
    }

    handleSubmit(event) {
        event.preventDefault()
        const { params } = this.state
        const { onSubmit, user, history } = this.props
        const callback = user => {
            if (onSubmit && typeof onSubmit === "function") onSubmit(user)
            this.setState({ submitted: true })
            history.goBack()
        }
        if (user) {
            User.update(user.id, params, callback)
        } else {
            User.create(params, callback)
        }
    }

    validateScreenName() {
        return this.state.params[User.SCREEN_NAME].length > 0
            ? "success"
            : "error"
    }

    render() {
        const { submitted, params } = this.state
        const { from } = this.props.location.state || { from: { pathname: '/' }}
        return submitted
            ? <Redirect to={from}/>
            : <Form onSubmit={this.handleSubmit}>
            <FormGroup controlId={User.SCREEN_NAME} validationState={this.validateScreenName()}>
                <ControlLabel>{User.SCREEN_NAME}</ControlLabel>
                <FormControl type="text" value={params[User.SCREEN_NAME]} onChange={this.handleChange}/>
                <FormControl.Feedback/>
            </FormGroup>
            <FormGroup controlId={User.FIRST_NAME}>
                <ControlLabel>{User.FIRST_NAME}</ControlLabel>
                <FormControl type="text" value={params[User.FIRST_NAME]} onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup controlId={User.LAST_NAME}>
                <ControlLabel>{User.LAST_NAME}</ControlLabel>
                <FormControl type="text" value={params[User.LAST_NAME]} onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup controlId={User.EMAIL}>
                <ControlLabel>{User.EMAIL}</ControlLabel>
                <FormControl type="text" value={params[User.EMAIL]} onChange={this.handleChange}/>
            </FormGroup>
            <Button type="submit">Save</Button>
        </Form>
    }
}