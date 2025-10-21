import sendRequest from "./sendRequest"
const baseURL = "/notes/"

export async function index() {
    return sendRequest(baseURL);
}

export function show(noteId) {
    return sendRequest(`${baseURL}${noteId}/`);
}

export async function create(formData) {
    return sendRequest(`${baseURL}`, "POST", formData)
}

export async function update(formData, noteId) {
    return sendRequest(`${baseURL}${noteId}/`, "PUT", formData)
}

export async function deleteNote(noteId) {
    return sendRequest(`${baseURL}${noteId}/`, "DELETE")
}