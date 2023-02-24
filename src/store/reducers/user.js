import { CONNECTED, GET_USERS, NOT_CONNECTED, REMOVE_TOAST } from "../types";

const initialState = {
    users: [],
    error: null,
    loading: true,
    toast: null,
    status: true
}

export default function(state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case GET_USERS :
            return {
                ...state,
                users: payload,
                loading: false
            }
        case CONNECTED :
            return {
                ...state,
                toast: 'Reload',
                status: true
            }
        case NOT_CONNECTED :
            return {
                ...state,
                toast: 'Internet Disconnected',
                status: false
            }
        case REMOVE_TOAST :
            return {
                ...state,
                toast: null
            }
        default:
            return state
    }
}