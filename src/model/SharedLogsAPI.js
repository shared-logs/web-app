import {API_URL} from "../config";

export default class SharedLogsAPI {
    constructor(record) {
        for (const prop in record) {
            this[prop] = record[prop]
        }
    }

    static get ID() {
        return "id"
    }

    static get CREATED() {
        return "created"
    }

    static get MODIFIED() {
        return "modified"
    }

    static all(table, type, next) {
        fetch(`${API_URL}/${table}`)
            .then(response => response.json())
            .then(list => {
                list.map((e, i, n) => {
                    n[i] = new type(e)
                    return true
                })
                next(list)
            })
    }

    static get(table, id, type, next) {
        fetch(`${API_URL}/${table}/${id}`)
            .then(response => response.json())
            .then(record => {
                next(new type(record))
            })
    }

    static create(table, params, type, next) {
        fetch(`${API_URL}/${table}`, {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(params)
        })
            .then(response => response.json())
            .then(record => {
                next(new type(record))
            })
    }

    static update(table, params, type, next) {
        fetch(`${API_URL}/${table}`, {
            method: "put",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(params)
        })
            .then(response => response.json())
            .then(record => {
                next(new type(record))
            })
    }

    static delete(table, id, type, next) {
        fetch(`${API_URL}/${table}/${id}`, { method: "delete" })
            .then(response => response.json())
            .then(record => {
                next(new type(record))
            })
    }
}