import Log from "./Log";
import SharedLogsAPI from "./SharedLogsAPI";

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
        if (this.logs) this.logs.map((record, i, subobject) => {
            subobject[i] = new Log(record)
            return true;
        })
    }

    get name() {
        return this._name || `Device ${this.id}`
    }

    set name(value) {
        this._name = value
    }

    static all(next) {
        super.all("devices", this, next)
    }

    static get(id, next) {
        super.get("devices", id, this, next)
    }

    static create(params, next) {
        super.create("devices", params, this, next)
    }

    static update(id, params, next) {
        super.update("devices", id, params, this, next)
    }

    static delete(id, next) {
        super.delete("devices", id, this, next)
    }
}