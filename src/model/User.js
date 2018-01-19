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

    static all(callback) {
        super.all("users", this, callback)
    }

    static get(id, callback) {
        super.get("users", id, this, callback)
    }

    static lookupByScreenName(screen_name, callback) {
        fetch(`${process.env.REACT_APP_API_URL}/users/${screen_name}`)
            .then(response => response.json())
            .then(jsonData => {
                if (callback && typeof callback === "function") callback(new User(jsonData))
            })
    }

    static create(params, callback) {
        super.create("users", params, this, callback)
    }

    static update(id, params, callback) {
        super.update("users", id, params, this, callback)
    }

    static delete(id, callback) {
        super.delete("users", id, this, callback)
    }
}