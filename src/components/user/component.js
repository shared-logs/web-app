import React, {Component} from "react"
import Loading from "../Loading";
import {Button, Form} from "react-bootstrap";

export default class User extends Component {
    render() {
        const mode = this.props.mode
        const user = this.props.user

        if (mode === "create") return(
            <div class="user create">
                <h4>New user</h4>
                <p>You would like to create a new user</p>
                <Button bsStyle="primary" type="submit">Yup!</Button>
            </div>
        )

        if (!user) return <Loading mode={mode}/>

        switch(mode) {
            case "inline":
                return <span className="user inline">{user.name}</span>
            case "thumb":
                return (
                    <div className="user thumb">
                        <p>
                            {user.name}<br/>
                            <small>{user.screen_name}</small>
                        </p>
                    </div>
                )
            case "edit":
                return (
                    <div className="user edit">
                        <Form>
                            <h4>{user.name}</h4>
                            <p>You would like to be editing this user</p>
                            <Button bsStyle="primary" type="submit">Yup!</Button>
                        </Form>
                    </div>
                )
            case "full":
            default:
                return (
                    <div className="user full">
                        <h4>{user.name}</h4>
                        <p><small>Screen name</small> {user.screen_name}</p>
                        {(user.first_name || user.last ? <p>{user.first_name} {user.last_name}</p> : "")}
                        {(user.email ? <p><small>Email</small> {user.email}</p> : "")}
                    </div>
                )
        }
    }
}