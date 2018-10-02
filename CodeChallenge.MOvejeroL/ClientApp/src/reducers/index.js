import { combineReducers } from 'redux';
import { phoneReducer } from './phoneReducer';
import { httpReducer } from './httpReducer';


export const state = combineReducers({
    phones: phoneReducer,
    httpLoading: httpReducer,
});
