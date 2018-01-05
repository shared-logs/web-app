import React, {Component} from "react"
import {Redirect, Route, Switch} from "react-router-dom"
import DeviceBrowser from "./browse/device";
import LogBrowser from "./browse/log";
import EntryBrowser from "./browse/entry";
import LogIn from "./auth/login";
import LogOut from "./auth/logout";

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.handleLogIn = this.handleLogIn.bind(this)
    }

    handleLogIn(user) {
        this.setState({ user: user })
    }

    render() {
        if (!this.state.user) return <LogIn onSubmit={this.handleLogIn}/>

        return (
            <Switch>
                <Route exact path="/" render={() => ( <Redirect to="/devices"/> )}/>
                <Route exact path="/devices" render={props => ( <DeviceBrowser {...props} user={this.state.user}/> )}/>
                <Route exact path="/devices/:device_id/logs" render={props => ( <LogBrowser {...props} user={this.state.user}/> )}/>
                <Route exact path="/devices/:device_id/logs/:log_id" render={props => ( <EntryBrowser {...props} user={this.state.user}/> )}/>
                <Route exact path="/logout" render={props => ( <LogOut {...props} user={this.state.user}/> )}/>
            </Switch>
        )
    }
}