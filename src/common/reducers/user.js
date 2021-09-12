import { UserActionTypes } from '../types'

const initialState = {
    userLogin: {},
    user: {},
    userList: []
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case UserActionTypes.SET_USER_LOGIN: {
            return { ...state, userLogin: action.payload }
        }

        case UserActionTypes.GET_USER_LIST:
            return { ...state, userList: action.payload }

        case UserActionTypes.GET_USER:
            return { ...state, user: action.payload }

        default:
            return state
    }
}
