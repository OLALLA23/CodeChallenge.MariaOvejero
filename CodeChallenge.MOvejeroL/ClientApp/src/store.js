import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { state} from './reducers';
import logger from 'redux-logger';


const middlewares = [
    reduxThunk,
    logger
];

export const store = createStore(
    state,
    applyMiddleware(...middlewares)
);

