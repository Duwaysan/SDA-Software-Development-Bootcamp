import sendRequest from "./sendRequest"
const baseURL = "/notes/"

export async function index() {
    return sendRequest(baseURL);
    
}