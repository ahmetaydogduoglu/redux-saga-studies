import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './store/reducers/reducer';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from "./saga/saga";

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
export const testStore=store;
sagaMiddleware.run(rootSaga);

store.subscribe(() => {
    console.log("subscribe!!", JSON.stringify(store.getState()));
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
