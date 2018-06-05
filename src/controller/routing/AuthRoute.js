import React from "react"
import {Redirect, Route} from "react-router-dom";

const AuthRoute = ({ component: Component, auth, ...rest }) => (
    <Route {...rest} render={(props) => (
        auth.isAuthenticated === true
            ? <Component auth={auth} {...props} />
            : <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
            }} />
    )} />
)

export default AuthRoute