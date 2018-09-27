import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';
import './index.css';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';
import './services/authService';

// TESTING - Remove
import axios from 'axios';
window.axios = axios;

const initialState = {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(reduxThunk))
);

const app = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
