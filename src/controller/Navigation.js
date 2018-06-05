import React from "react";
import {Link, withRouter} from "react-router-dom";
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
            <NavbarBrand>Shared Logs</NavbarBrand>
            <NavbarToggler onClick={this.toggle}/>
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    {auth.isAuthenticated
                        ? <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                {auth.user.name}
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem tag={Link} to="/profile">Profile</DropdownItem>
                                <DropdownItem onClick={onSignOut}>Sign Out</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        : <NavItem>
                            <NavLink tag={Link} to="/login">Sign In</NavLink>
                        </NavItem>
                    }
                    <NavItem>
                        <NavLink tag={Link} to="/devices">Devices</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/users">Users</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
}
}

export default withRouter(Navigation)