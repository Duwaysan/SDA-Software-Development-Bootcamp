import sendRequest from "./sendRequest";
const baseURL = "/categories/"

export function index() {
    return sendRequest(baseURL)
}

export function show(id) {
    return sendRequest(`${baseURL}${id}`)
}

export function create(formData) {
    return sendRequest(baseURL, "POST", formData)
}

export function update(id, formData) {
    return sendRequest(`${baseURL}${id}`, "PUT", formData)
}

export function deleteToy(id) {
    return sendRequest(`${baseURL}${id}`, "DELETE")
}