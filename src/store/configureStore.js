import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

function configureStoreProd(initialState){
    const middlewares = [
        thunk,
    ];

    return createStore(rootReducer, initialState, compose(applyMiddleware(...middlewares)))
}

function configureStoreDev(initialState){
    const middlewares = [
        thunk
    ];
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    return createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middlewares)));
}

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;

export default configureStore;