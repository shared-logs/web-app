import * as cookie from "react-cookies";
import User from "../model/User";

export default class Authentication {
    user = null

    isAuthenticated() {
        return this.user instanceof User
    }

    getState() {
        return new AuthState(this)
    }

    signInByCookie(callback) {
        const screen_name = cookie.load(process.env.REACT_APP_USER_COOKIE)
        if (screen_name) this.signInByScreenName(screen_name, callback)
    }

    signInByScreenName(screen_name, callback) {
        User.lookupByScreenName(screen_name, user => {
            this.user = user
            var expiration = new Date()
            expiration.setFullYear(expiration.getFullYear()+1)
            cookie.save(process.env.REACT_APP_USER_COOKIE, user[User.SCREEN_NAME], { expires:  expiration})
            if (callback && typeof callback === "function") callback(new AuthState(this))
        })
    }

    signOut(callback) {
        this.user = null;
        cookie.remove(process.env.REACT_APP_USER_COOKIE)
        if (callback && typeof callback === "function") callback(new AuthState(this))
    }
}

export class AuthState {
    constructor(auth) {
        this.isAuthenticated = auth.isAuthenticated()
        this.user = auth.user
    }
}