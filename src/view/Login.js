import React from "react"
import User from "../model/User";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import {Link} from "react-router-dom";

export default class Login extends React.Component {
    static get SUBMIT() {
        return "submit_login"
    }

    render() {
        const {login, handlers} = this.props
        return <div>
            <Form onSubmit={handlers[Login.SUBMIT]}>
                <FormGroup>
                    <Label>{User.SCREEN_NAME}</Label>
                    <Input type="text" id={User.SCREEN_NAME} value={login[User.SCREEN_NAME]} onChange={handlers[User.SCREEN_NAME]}/>
                </FormGroup>
                <FormGroup>
                    <Button color="primary" type="submit">Sign in</Button>
                </FormGroup>
            </Form>
            <div className="container">
                <p><Link to="/register">Register as a new user</Link></p>
            </div>
        </div>
    }
}