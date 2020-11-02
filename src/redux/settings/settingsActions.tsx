import axios from 'axios'
import { FETCH_SETTINGS_REQUEST, FETCH_SETTINGS_SUCCESS, FETCH_SETTINGS_FAILURE } from "./settingsTypes"

export const fetchUsersRequest = () => {
    return {
        type: FETCH_SETTINGS_REQUEST
    }
}

export const fetchSettingsSuccess = (settings: Object)=> {
    return {
        type: FETCH_SETTINGS_SUCCESS,
        payload: settings
    }
}

export const fetchSettingsFailure = error => {
    return {
        type: FETCH_SETTINGS_FAILURE,
        payload: error
    }
}

export const fetchSettings = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest);
        axios.get("http://127.0.0.1:8000/api/default-data")
            .then(resp => {
                const data = resp.data;
                dispatch(fetchSettingsSuccess(data));
            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(fetchSettingsFailure(errorMsg));
            })
    }
}