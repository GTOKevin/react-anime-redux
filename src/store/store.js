import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from '../reducers/authReducer';
import { giftReducer } from '../reducers/giftReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth:authReducer,
    gift:giftReducer,
});

export const store=createStore(reducers,
    composeEnhancers(
        applyMiddleware(thunk)
));