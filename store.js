import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import mainReducer from './featyres/main/main.reducer';
import searchReducer from './featyres/search/search.reducer';
import thunk from 'redux-thunk';

const reducers = combineReducers({ flights: mainReducer, searching: searchReducer });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(reducers, enhancer);

export default store;
