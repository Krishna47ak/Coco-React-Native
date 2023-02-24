import AsyncStorage from '@react-native-async-storage/async-storage';
import cocoApi from '../../api/cocoApi'
import { ADD_ERROR, GET_USERS } from "../types";

export const getUsers = () => async dispatch => {
    try {
        const response = await cocoApi.get('/users')
        await AsyncStorage.setItem('users', JSON.stringify(response.data))
        dispatch({ type: GET_USERS, payload: response.data })
    } catch (err) {
        console.log(err.response.data);
    }
}

export const getUsersOffline = () => async dispatch => {
    const users = await AsyncStorage.getItem('users')
    
    if (users) {
        dispatch({ type: GET_USERS, payload: JSON.parse(users) })
    }

}