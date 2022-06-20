import { sendRequest } from "./send-request"

const BASE_URL = '/api/sessions'

export async function createSession(payload) {
    return sendRequest(`${BASE_URL}`, 'POST', payload)
}