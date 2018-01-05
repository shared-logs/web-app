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

    static all(next) {
        super.all("entries", this, next)
    }

    static get(id, next) {
        super.get("entries", id, this, next)
    }

    static create(params, next) {
        super.create("entries", params, this, next)
    }

    static update(id, params, next) {
        super.update("entries", id, params, this, next)
    }

    static delete(id, next) {
        super.delete("entries", id, this, next)
    }

    static listForLog(id, next) {
        fetch(`${API_URL}/logs/${id}/entries`)
            .then(response => response.json())
            .then(list => {
                list.map((record, i, n) => {
                    n[i] = new Entry(record)
                    return true;
                })
                next(list)
            })
    }
}