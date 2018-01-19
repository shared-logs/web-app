import React from "react"
import DeviceBrowser from "./devices/DeviceBrowser";
import UserBrowser from "./users/UserBrowser";
import Navigation from "./Navigation";
import {Route} from "react-router-dom";
import DeviceViewer from "./devices/DeviceViewer";
import LogViewer from "./logs/LogViewer";
import EntryEditor from "./entries/EntryEditor";
import Login from "./Login";
import Authentication from "../Authentication";
import UserViewer from "./users/UserViewer";
import AuthRoute from "../AuthRoute";
import UserEditor from "./users/UserEditor";
import User from "../model/User";

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.auth = new Authentication()
        this.state = { auth: this.auth.getState() }
        this.handleSignInByScreenName = this.handleSignInByScreenName.bind(this)
        this.handleSignOut = this.handleSignOut.bind(this)
        this.handleRegistration = this.handleRegistration.bind(this)
    }


    handleSignInByScreenName(screen_name, callback) {
        this.auth.signInByScreenName(screen_name, authState => {
            this.setState({ auth: authState })
            if (callback && typeof callback === "function") callback(authState)
        })
    }

    handleSignOut(callback) {
        this.auth.signOut(authState => {
            this.setState({ auth: authState})
            if (callback && typeof callback === "function") callback(authState)
        })
    }

    handleRegistration(user, callback) {
        this.handleSignInByScreenName(user[User.SCREEN_NAME], callback)
    }

    componentDidMount() {
        this.auth.signInByCookie(authState => {
            this.setState({ auth: authState })
        })
    }

    render() {
        const {auth} = this.state
        return <div>
            <Navigation auth={auth} onSignOut={this.handleSignOut}/>
            <div className="container">
                <AuthRoute path="/devices/:device_id/logs/:log_id/add" component={EntryEditor} auth={auth}/>
                <Route exact path="/devices/:device_id/logs/:log_id" component={LogViewer}/>
                <Route exact path="/devices/:device_id" component={DeviceViewer}/>
                <Route exact path="/devices" component={DeviceBrowser}/>
                <Route path="/users" component={UserBrowser}/>
                <Route path="/login" render={(props) => (
                    <Login {...props} onSignInByScreenName={this.handleSignInByScreenName} auth={auth}/>
                )}/>
                <AuthRoute path="/profile" component={UserViewer} auth={auth} user={auth.user}/>
                <Route path="/register" render={(props) => (
                    <UserEditor {...props} onSubmit={this.handleRegistration}/>
                )}/>
            </div>
        </div>
    }
}