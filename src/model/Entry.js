import {API_URL} from "../config";
import Log from "./Log";
import User from "./User";
import SharedLogsAPI from "./SharedLogsAPI";

export default class Entry extends SharedLogsAPI{
    static get TITLE() {
        return "title"
    }

    static get DETAIL() {
        return "detail"
    }

    static get USER_ID() {
        return "user_id"
    }

    static get LOG_ID() {
        return "log_id"
    }

    constructor(record) {
        super(record)
        if (this.log) this.log = new Log(this.log)
        if (this.user) this.user = new User(this.user)
    }

    get name() {
        return `${this.created}: ${this.title}`
    }

    static all(callback) {
        super.all("entries", this, callback)
    }

    static get(id, callback) {
        super.get("entries", id, this, callback)
    }

    static create(params, callback) {
        super.create("entries", params, this, callback)
    }

    static update(id, params, callback) {
        super.update("entries", id, params, this, callback)
    }

    static delete(id, callback) {
        super.delete("entries", id, this, callback)
    }

    static listForLog(id, callback) {
        fetch(`${API_URL}/logs/${id}/entries`)
            .then(response => response.json())
            .then(list => {
                list.map((record, i, n) => {
                    n[i] = new Entry(record)
                    return true;
                })
                if (callback && typeof callback === "function") callback(list)
            })
    }
}