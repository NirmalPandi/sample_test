import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import allReducers from './reducer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
const logger = createLogger();
const store = createStore(
    allReducers,
    applyMiddleware(thunk, promise, logger)
);

function loadUser() {
    return fetch('http://localhost:3005/user').then(
        data =>
            ({
                type: "LOAD",
                payload: data.json()
            }),

        error => console.log(error)
    );
}

store.dispatch(
    loadUser()
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);