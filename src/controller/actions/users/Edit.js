import React from "react"
import User from "../../../model/User";
import UserEdit from "../../../view/user/Edit"
import {Redirect} from "react-router-dom";

export default class Edit extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.validateScreenName = this.validateScreenName.bind(this)
        this.validateForm = this.validateForm.bind(this)
        this.state = {
            submitted: false,
            user: props.user || {
                [User.SCREEN_NAME]: "",
                [User.FIRST_NAME]: "",
                [User.LAST_NAME]: "",
                [User.EMAIL]: ""
            },
            handlers: {
                [User.SCREEN_NAME]: this.handleChange,
                [User.FIRST_NAME]: this.handleChange,
                [User.LAST_NAME]: this.handleChange,
                [User.EMAIL]: this.handleChange,
                [UserEdit.SUBMIT]: this.handleSubmit
            },
            validators: {
                [User.SCREEN_NAME]: this.validateScreenName,
                [UserEdit.VALIDATE]: this.validateForm
            }
        }
        this.feedback = {
            [User.SCREEN_NAME]: "",
            [User.FIRST_NAME]: "",
            [User.LAST_NAME]: "",
            [User.EMAIL]: ""
        }
    }

    handleChange(event) {
        let { user } = this.state
        user[event.target.id] = event.target.value
        this.setState({ user: user })
    }

    handleSubmit(event) {
        event.preventDefault()
        const params = this.state.user
        const { onSubmit, user, history } = this.props
        const callback = user => {
            if (onSubmit && typeof onSubmit === "function") onSubmit(user)
            this.setState({ submitted: true })
            history.goBack()
        }
        if (user) {
            User.update(user.id, params, callback)
        } else {
            User.create(params, callback)
        }
    }

    validateScreenName() {
        if (this.state.user[User.SCREEN_NAME].length >= 3) {
           this.feedback[User.SCREEN_NAME] = ""
            return {valid: true}
        } else {
            this.feedback[User.SCREEN_NAME] = "A screen name is required! (minimum 3 characters)"
            return {invalid: true}
        }
    }

    validateForm() {
        return this.validateScreenName().valid ?
            {} :
            {disabled: true}
    }

    render() {
        const { submitted } = this.state
        const { from } = this.props.location.state || { from: { pathname: '/' }}
        return submitted
            ? <Redirect to={from}/>
            : <UserEdit {...this.state} feedback={this.feedback} {...this.props}/>
    }
}