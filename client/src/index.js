import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './containers/App/App';
import store from './store';
import registerServiceWorker from './registerServiceWorker';
import './services/authService';

// TESTING - Remove
import axios from 'axios';
window.axios = axios;

const app = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
