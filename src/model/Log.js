import Device from "./Device";
import SharedLogsAPI from "./SharedLogsAPI";
import {API_URL} from "../config";

export default class Log extends SharedLogsAPI{
    static get NAME() {
        return "name"
    }

    constructor(record) {
        super(record)
        if (this.device) this.device = new Device(this.device)
    }

    static all(next) {
        super.all("logs", this, next)
    }

    static get(id, next) {
        super.get("logs", id, this, next)
    }

    static create(params, next) {
        super.create("logs", params, this, next)
    }

    static update(id, params, next) {
        super.update("logs", id, params, this, next)
    }

    static delete(id, next) {
        super.delete("logs", id, this, next)
    }

    static listForDevice(id, next) {
        fetch(`${API_URL}/devices/${id}/logs`)
            .then(response => response.json())
            .then(list => {
                list.map((record, i, n) => {
                    n[i] = new Log(record)
                    return true
                })
                next(list)
            })
    }
}