import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './config/store';

const app = <Provider store={store}>
                <HashRouter>
                    <App />
                </HashRouter>
            </Provider>;

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
