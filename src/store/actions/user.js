import AsyncStorage from '@react-native-async-storage/async-storage';
import cocoApi from '../../api/cocoApi'
import { GET_USERS, CONNECTED, NOT_CONNECTED, REMOVE_TOAST } from "../types";

export const getUsers = () => async dispatch => {
    try {
        const response = await cocoApi.get('/users')
        await AsyncStorage.setItem('users', JSON.stringify(response.data))
        dispatch({ type: REMOVE_TOAST })
        dispatch({ type: GET_USERS, payload: response.data })
    } catch (err) {
        console.log(err);
    }
}

export const getUsersOffline = () => async dispatch => {
    const users = await AsyncStorage.getItem('users')

    if (users) {
        dispatch({ type: GET_USERS, payload: JSON.parse(users) })
    }
}

export const checkInternet = (status) => async dispatch => {
    if (status) {
        dispatch({ type: CONNECTED })
    } else {
        dispatch({ type: NOT_CONNECTED })
        setTimeout(() => {
            dispatch({ type: REMOVE_TOAST })
        }, 2000);
    }
}
