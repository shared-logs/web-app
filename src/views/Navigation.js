import React, {Component} from "react"
import {Nav, Navbar, NavItem} from "react-bootstrap";
import {Link} from "react-router-dom";
import FontAwesome from "react-fontawesome"
import {LinkContainer} from "react-router-bootstrap";
import UserView from "../components/user/component";

export default class Navigation extends Component {
    render = () => (
        <Navbar collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to={this.props.up}>
                        <FontAwesome name={this.props.icon || "chevron-left"}/> {this.props.title}
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle/>
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <LinkContainer to="#">
                        <NavItem>
                            <FontAwesome name="user-o"/> <UserView user={this.props.user} mode="inline"/>
                        </NavItem>
                    </LinkContainer>
                    <LinkContainer to="/logout">
                        <NavItem>
                            Log out
                        </NavItem>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
