import { applyMiddleware, createStore, compose } from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';

const initialState = {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(reduxThunk))
);

export default store;