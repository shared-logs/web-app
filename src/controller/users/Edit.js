import React from "react"
import User from "../../model/User";
import {Redirect} from "react-router-dom";
import {Button, Form, FormFeedback, FormGroup, Input, Label} from "reactstrap";

export default class Edit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            submitted: false,
            params: props.user || {
                [User.SCREEN_NAME]: "",
                [User.FIRST_NAME]: "",
                [User.LAST_NAME]: "",
                [User.EMAIL]: ""
            },
        }
        this.feedback = {
            [User.SCREEN_NAME]: "",
            [User.FIRST_NAME]: "",
            [User.LAST_NAME]: "",
            [User.EMAIL]: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        let { params } = this.state
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
        if (this.state.params[User.SCREEN_NAME].length > 0) {
           this.feedback[User.SCREEN_NAME] = ""
            return {valid: true}
        } else {
            this.feedback[User.SCREEN_NAME] = "A screen name is required!"
            return {invalid: true}
        }
    }

    render() {
        const { submitted, params } = this.state
        const { from } = this.props.location.state || { from: { pathname: '/' }}
        return submitted
            ? <Redirect to={from}/>
            : <Form onSubmit={this.handleSubmit}>
            <FormGroup>
                <Label>{User.SCREEN_NAME}</Label>
                <Input type="text" id={User.SCREEN_NAME} value={params[User.SCREEN_NAME]} onChange={this.handleChange} {...this.validateScreenName()}/>
                <FormFeedback>{this.feedback[User.SCREEN_NAME]}</FormFeedback>
            </FormGroup>
            <FormGroup>
                <Label>{User.FIRST_NAME}</Label>
                <Input type="text" id={User.FIRST_NAME} value={params[User.FIRST_NAME]} onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup>
                <Label>{User.LAST_NAME}</Label>
                <Input type="text" id={User.LAST_NAME} value={params[User.LAST_NAME]} onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup>
                <Label>{User.EMAIL}</Label>
                <Input type="text" id={User.EMAIL} value={params[User.EMAIL]} onChange={this.handleChange}/>
            </FormGroup>
            <Button color="primary" type="submit">Save</Button>
        </Form>
    }
}