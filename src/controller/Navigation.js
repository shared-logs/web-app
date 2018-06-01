import React from "react";
import {MenuItem, Nav, Navbar, NavDropdown, NavItem} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import {withRouter} from "react-router-dom";

class Navigation extends React.Component {
    render() {
        const { onSignOut, auth } = this.props
        return <Navbar collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    Shared Logs
                </Navbar.Brand>
                <Navbar.Toggle/>
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    {auth.isAuthenticated
                        ? <NavDropdown title={auth.user.name} id="auth-menu">
                            <LinkContainer to="/profile">
                                <MenuItem>Profile</MenuItem>
                            </LinkContainer>
                            <MenuItem onClick={onSignOut}>Sign Out</MenuItem>
                        </NavDropdown>
                        : <LinkContainer to="/login">
                            <NavItem>Sign In</NavItem>
                        </LinkContainer>
                    }
                    <LinkContainer to="/devices">
                        <NavItem>Devices</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/users">
                        <NavItem>Users</NavItem>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    }
}

export default withRouter(Navigation)