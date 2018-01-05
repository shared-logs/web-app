import SharedLogsAPI from "./SharedLogsAPI";
import {API_URL} from "../config";

export default class User extends SharedLogsAPI {
    static get SCREEN_NAME() {
        return "screen_name"
    }

    static get FIRST_NAME() {
        return "first_name"
    }

    static get LAST_NAME() {
        return "last_name"
    }

    static get EMAIL() {
        return "email"
    }

    static get USERNAME() {
        return "username"
    }

    static get PASSWORD() {
        return "password"
    }

    get name() {
        return (this.first_name || this.last_name ? `${this.first_name} ${this.last_name}` : this.screen_name)
    }

    static all(next) {
        super.all("users", this, next)
    }

    static get(id, next) {
        super.get("users", id, this, next)
    }

    static lookupByScreenName(screen_name, next) {
        fetch(`${API_URL}/users/${screen_name}`)
            .then(response => response.json())
            .then(jsonData => {
                next(new User(jsonData))
            })
    }

    static create(params, next) {
        super.create("users", params, this, next)
    }

    static update(id, params, next) {
        super.update("users", id, params, this, next)
    }

    static delete(id, next) {
        super.delete("users", id, this, next)
    }
}