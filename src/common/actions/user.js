import { UserActionTypes } from '../types'
import { createAction } from '../../shared'

export const UserActions = {
    getUserList: (payload) => createAction(UserActionTypes.GET_USER_LIST, payload),
    getUser: (payload) => createAction(UserActionTypes.GET_USER, payload),
    setUserLogin: (payload) => createAction(UserActionTypes.SET_USER_LOGIN, payload),
    createUser: (payload) => createAction(UserActionTypes.CREATE_USER, payload),
    updateUser: (payload) => createAction(UserActionTypes.UPDATE_USER, payload),
    deleteUser: (payload) => createAction(UserActionTypes.DELETE_USER, payload),
}