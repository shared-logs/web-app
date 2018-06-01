import React from "react"
import {Link, Redirect} from "react-router-dom";
import User from "../model/User";
import {Button, ControlLabel, Form, FormControl, FormGroup} from "react-bootstrap";

export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            [User.SCREEN_NAME]: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.onSignInByScreenName(this.state[User.SCREEN_NAME])
    }

    render() {
        const { from } = this.props.location.state || { from: { pathname: '/' }}
        if (this.props.auth.isAuthenticated) {
            return <Redirect to={from}/>
        }

        return <div>
            <Form onSubmit={this.handleSubmit}>
                <FormGroup controlId={User.SCREEN_NAME}>
                    <ControlLabel>{User.SCREEN_NAME}</ControlLabel>
                    <FormControl type="text" value={this.state[User.SCREEN_NAME]} onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Button type="submit">Sign in</Button>
                </FormGroup>
            </Form>
            <div className="container">
                <p><Link to="/register">Register as a new user</Link></p>
            </div>
        </div>
    }
}
