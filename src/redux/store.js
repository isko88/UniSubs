import { combineReducers } from 'redux';
import {subscriptionReducer} from './reducers/subscriptionReducer'
import {userReducer} from './reducers/userReducer'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { cardReducer } from './reducers/cardReducer';
import { socialReducer } from './reducers/socialReducer';
export const rootReducer = combineReducers({
    Subscription:subscriptionReducer,
    User: userReducer,
    Card:cardReducer,
    Media:socialReducer
})
const middleWares = applyMiddleware(logger, thunk);

export const store = createStore(rootReducer, middleWares);