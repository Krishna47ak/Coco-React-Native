import { GET_USERS } from "../types";

const initialState = {
    users: [],
    error: null,
    loading: true
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
        default:
            return state
    }
}