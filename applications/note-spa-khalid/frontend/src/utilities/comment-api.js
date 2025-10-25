import sendRequest from "./sendRequest";

export function noteComments(noteId) {
    return sendRequest(`/notes/${noteId}/comments/`)
}

export function create(formData, noteId) {
    return sendRequest(`/notes/${noteId}/comments/`, "POST", formData)
}