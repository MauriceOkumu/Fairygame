import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import errorReducer from '../reducers/errorreducer'
import authReducer from '../reducers/authreducer'

const initialState = {};
const store = createStore(
    combineReducers({
        errors: errorReducer,
        auth: authReducer
     }),
    initialState,
    compose(applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    );

export default store;