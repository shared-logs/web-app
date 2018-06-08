import Log from "./Log";
import SharedLogsAPI from "./SharedLogsAPI";
import Url from "./Url";

export default class Device extends SharedLogsAPI {
    static get MANUFACTURER() {
        return "manufacturer"
    }

    static get MODEL() {
        return "model"
    }

    static get NAME() {
        return "name"
    }

    constructor(record) {
        super(record)
        if (this.urls) this.urls.map((record, i, subobject) => {
            subobject[i] = new Url(record)
            return true
        })
        if (this.logs) this.logs.map((record, i, subobject) => {
            subobject[i] = new Log(record)
            return true
        })
    }

    get name() {
        return this._name || `Device ${this.id}`
    }

    set name(value) {
        this._name = value
    }

    static all(params, callback) {
        super.all("devices", params, this, callback)
    }

    static get(id, params, callback) {
        super.get("devices", id, params, this, callback)
    }

    static create(params, callback) {
        super.create("devices", params, this, callback)
    }

    static update(id, params, callback) {
        super.update("devices", id, params, this, callback)
    }

    static delete(id, callback) {
        super.delete("devices", id, this, callback)
    }
}