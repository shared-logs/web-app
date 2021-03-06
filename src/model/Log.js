import Device from "./Device";
import SharedLogsAPI from "./SharedLogsAPI";
import Entry from "./Entry";

export default class Log extends SharedLogsAPI{
    static get NAME() {
        return "name"
    }

    constructor(record) {
        super(record)
        if (this.device) this.device = new Device(this.device)
        if (this.entries) this.entries.map((record, i, subobject) => {
            subobject[i] = new Entry(record)
            return true;
        })
    }

    static all(params, callback) {
        super.all("logs", params, this, callback)
    }

    static get(id, params, callback) {
        super.get("logs", id, params, this, callback)
    }

    static create(params, callback) {
        super.create("logs", params, this, callback)
    }

    static update(id, params, callback) {
        super.update("logs", id, params, this, callback)
    }

    static delete(id, callback) {
        super.delete("logs", id, this, callback)
    }

    static listForDevice(id, callback) {
        fetch(`${process.env.REACT_APP_API_URL}/devices/${id}/logs`)
            .then(response => response.json())
            .then(list => {
                list.map((record, i, n) => {
                    n[i] = new Log(record)
                    return true
                })
                if (callback && typeof callback === "function") callback(list)
            })
    }
}