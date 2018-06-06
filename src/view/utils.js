import moment from "moment";

export function humanDate(timestamp) {
    return moment(timestamp, "YYYY-MM-DD HH:mm:ss").toDate().toLocaleDateString(undefined, {
        hour12: true,
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    })
}
