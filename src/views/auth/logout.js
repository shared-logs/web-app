import React, {Component} from "react"
import cookie from "react-cookies";
import {Button, PageHeader} from "react-bootstrap";
import {USER_COOKIE} from "../../config";
import {LinkContainer} from "react-router-bootstrap";

export default class LogOut extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event) {
        cookie.remove(USER_COOKIE)
        this.props.onSubmit()
    }

    render = () => (
        <div className="container">
            <PageHeader>
                Log out
            </PageHeader>
            <p>Are you sure you want to log out, {this.props.user.name}?</p>
            <LinkContainer to="/">
                <Button bsStyle="danger" onClick={this.handleClick}>Log Out</Button>
            </LinkContainer>
            <Button onClick={this.props.history.goBack.bind(this)}>I kid!</Button>
        </div>
    )
}