import axios from 'axios'

import { BASE_URL, TOKEN } from '../common/constants'
import { NotificationTypes } from '../common/enums'
import { localStorageService } from '../services'
import { showNotification } from '../utils'

const makeRequest = (requireAuth = true) => {
    const instance = axios.create({
        baseURL: BASE_URL,
        headers: getHeaders(requireAuth)
    })

    instance.interceptors.request.use(request => request);
    instance.interceptors.response.use(
        async response => handleResponse(response),
        err => handleError(err)
    )

    return instance;
}

const handleResponse = (response) => {
    return response
}

const handleError = (error) => {
    const message = error.error.message || error.message;

    showNotification(NotificationTypes.Error, message)
}

const getHeaders = (requireAuth = true) => {
    let headers = {
        'Content-Type': 'application/json',
    }

    if (requireAuth) {
        const currentToken = localStorageService.get(TOKEN);

        headers['Authorization'] = currentToken;
    }

    return headers;
}

export {
    makeRequest
}