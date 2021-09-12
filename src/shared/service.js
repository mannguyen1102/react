
import { HttpMethod } from '../common/enums'
import { makeRequest } from '../utils/axios'

export class BaseService {
    get(url, { requireAuth }) {
        return makeRequest(requireAuth)({
            url,
            method: HttpMethod.Get
        })
    }

    create(url, data, { requireAuth }) {
        return makeRequest(requireAuth)({
            url,
            data,
            method: HttpMethod.Post
        })
    }

    update(url, data, { requireAuth }) {
        return makeRequest(requireAuth)({
            url,
            data,
            method: HttpMethod.Put
        })
    }

    delete(url, data, { requireAuth }) {
        return makeRequest(requireAuth)({
            url,
            data,
            method: HttpMethod.Delete
        })
    }
}