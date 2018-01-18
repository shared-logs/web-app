import React from "react"
import DeviceBrowser from "./DeviceBrowser";
import UserBrowser from "./UserBrowser";
import Navigation from "./Navigation";
import {Route} from "react-router-dom";
import DeviceViewer from "./DeviceViewer";
import LogViewer from "./LogViewer";
import EntryEditor from "./EntryEditor";
import Login from "./Login";
import Authentication from "./Authentication";
import UserViewer from "./UserViewer";
import AuthRoute from "./AuthRoute";
import UserEditor from "./UserEditor";
import User from "./model/User";

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
                <AuthRoute path="/profile" component={UserViewer} auth={auth}/>
                <Route path="/register" render={(props) => (
                    <UserEditor {...props} onSubmit={this.handleRegistration}/>
                )}/>
            </div>
        </div>
    }
}