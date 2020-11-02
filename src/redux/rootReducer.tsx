import { combineReducers } from 'redux';
import settingsReducer from './settings/settingsReducer'

const rootReducer = combineReducers({
    settings: settingsReducer
});

export default rootReducer;