import React from "react";
import {withRouter} from "react-router-dom";
import {
    Collapse, DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler, NavItem, NavLink,
    UncontrolledDropdown
} from "reactstrap";

class Navigation extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        const { onSignOut, auth } = this.props
        return <Navbar color="light" light expand="md">
            <NavbarBrand href="#">Shared Logs</NavbarBrand>
            <NavbarToggler onClick={this.toggle}/>
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    {auth.isAuthenticated
                        ? <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                {auth.user.name}
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem href="/profile">Profile</DropdownItem>
                                <DropdownItem href="#" onClick={onSignOut}>Sign Out</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        : <NavItem>
                            <NavLink href="/login">Sign In</NavLink>
                        </NavItem>
                    }
                    <NavItem>
                        <NavLink href="/devices">Devices</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/users">Users</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
}
}

export default withRouter(Navigation)