// import {createStore} from 'redux';
import myReducers from './Reducers';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(myReducers,composeEnhancers(
    applyMiddleware(thunk)
));

export default store