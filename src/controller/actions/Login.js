import React from "react"
import {Redirect} from "react-router-dom";
import User from "../../model/User";
import LoginView from "../../view/Login"

export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            login: {
                [User.SCREEN_NAME]: ""
            },
            handlers: {
                [User.SCREEN_NAME]: this.handleChange,
                [LoginView.SUBMIT]: this.handleSubmit
            }
        }
    }

    handleChange(event) {
        var {login} = this.state
        login[event.target.id] = event.target.value
        this.setState({ login: login })
    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.onSignInByScreenName(this.state.login[User.SCREEN_NAME])
    }

    render() {
        const { from } = this.props.location.state || { from: { pathname: '/' }}
        if (this.props.auth.isAuthenticated) {
            return <Redirect to={from}/>
        }

        return <LoginView {...this.state} {...this.props}/>
    }
}
