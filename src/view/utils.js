export function humanDate(timestamp) {
    return new Date(timestamp).toLocaleDateString(undefined, {
        hour12: true,
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit"
    })
}