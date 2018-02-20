import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import App from './App';
import Table from './table';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
import allReducers from './reducer/index';
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    allReducers,
    applyMiddleware(thunk, promise),
    applyMiddleware(sagaMiddleware)
  )
  sagaMiddleware.run(rootSaga)
  


ReactDOM.render(<Provider store={store}>
    <div>
    <App />
    <Table />
    </div>
</Provider>, document.getElementById('root'));

registerServiceWorker();
