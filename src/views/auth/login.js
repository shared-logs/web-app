import React, {Component} from "react"
import {Button, ControlLabel, Form, FormControl, FormGroup, PageHeader} from "react-bootstrap";
import cookie from "react-cookies";
import User from "../../model/User";
import {USER_COOKIE} from "../../config";

export default class LogIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            [User.SCREEN_NAME]: "",
        }

        const user_id = cookie.load(USER_COOKIE);
        if (user_id) {
            User.get(user_id, this.props.onSubmit)
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value })
    }

    handleSubmit(event) {
        User.lookupByScreenName(this.state[User.SCREEN_NAME], user => {
            cookie.save(USER_COOKIE, user.id)
            this.props.onSubmit(user)
        })
    }

    render() {
        return (
            <div className="container">
                <PageHeader>
                    Log in
                </PageHeader>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup controlId={User.SCREEN_NAME}>
                        <ControlLabel>Screen name</ControlLabel>
                        <FormControl
                            type="text"
                            value={this.state.screen_name}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <Button type="submit">Sign in</Button>
                </Form>
            </div>
        )
    }
}