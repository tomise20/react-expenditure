import { FETCH_SETTINGS_REQUEST, FETCH_SETTINGS_SUCCESS, FETCH_SETTINGS_FAILURE } from "./settingsTypes"

export interface IAction {
    action: {
        type: FETCH_SETTINGS_REQUEST | FETCH_SETTINGS_SUCCESS | FETCH_SETTINGS_FAILURE
    }
}

const initialState = {
    loading: false,
    data: [],
    error: ''
}

const settingsReducer = (state = initialState, action: Object) => {
    switch (action.type) {
        case FETCH_SETTINGS_REQUEST: {
            return {
                ...state,
                loading: true
            }
        }
        case FETCH_SETTINGS_SUCCESS: {
            return {
                loading: false,
                users: action.payload,
                error: ''
            }
        }
        case FETCH_SETTINGS_FAILURE: {
            return {
                loading: false,
                users: [],
                error: action.error
            }
        }
        default: return state;
    }
}

export default settingsReducer;