import React from "react"
import DeviceBrowse from "./devices/Browse";
import UserBrowse from "./users/Browse";
import Navigation from "./Navigation";
import {Route} from "react-router-dom";
import DeviceView from "./devices/View";
import LogView from "./logs/View";
import EntryEdit from "./entries/Edit";
import Login from "./Login";
import Authentication from "./Authentication";
import UserView from "./users/View";
import AuthRoute from "./AuthRoute";
import UserEdit from "./users/Edit";
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
                <AuthRoute path="/devices/:device_id/logs/:log_id/add" component={EntryEdit} auth={auth}/>
                <Route exact path="/devices/:device_id/logs/:log_id" component={LogView}/>
                <Route exact path="/devices/:device_id" component={DeviceView}/>
                <Route exact path="/devices" component={DeviceBrowse}/>
                <Route path="/users" component={UserBrowse}/>
                <Route path="/login" render={(props) => (
                    <Login {...props} onSignInByScreenName={this.handleSignInByScreenName} auth={auth}/>
                )}/>
                <AuthRoute path="/profile" component={UserView} auth={auth} user={auth.user}/>
                <Route path="/register" render={(props) => (
                    <UserEdit {...props} onSubmit={this.handleRegistration}/>
                )}/>
            </div>
        </div>
    }
}