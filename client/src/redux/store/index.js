import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducer/index'
import thunkMiddleware from 'redux-thunk';

const composeEnhacer = window.___REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



const store = createStore(
    rootReducer,
    composeEnhacer(applyMiddleware(thunkMiddleware))


); 

export default store;

