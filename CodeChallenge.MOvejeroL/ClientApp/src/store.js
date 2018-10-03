import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { state} from './reducers';


const middlewares = [
    reduxThunk
];

export const store = createStore(
    state,
    applyMiddleware(...middlewares)
);

