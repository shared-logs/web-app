import SharedLogsAPI from "./SharedLogsAPI";
import Device from "./Device";

export default class Url extends SharedLogsAPI {
    static get DEVICE_ID() {
        return "device_id"
    }

    static get NAME() {
        return "name"
    }

    static get URL() {
        return "url"
    }

    constructor(record) {
        super(record)
        if (this.device) this.device = new Device(this.device)
    }
}