
import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import allReducers from './reducer/index';




import App from './container/app';
import registerServiceWorker from './registerServiceWorker';



const logger = createLogger();
const store = createStore(
    allReducers,
    applyMiddleware(thunk, promise, logger)
);

function loadItems() {
    return fetch('http://localhost:3005/items').then(
        data =>
            ({
                type: "LOAD",
                payload: data.json()
            }),

        error => console.log(error)
    );
}

store.dispatch(
    loadItems()
);




ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
