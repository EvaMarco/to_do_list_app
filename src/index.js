import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from "redux";
import toDoReducer from "./reducer/toDoReducer";
import initialState from "./store/initialState";
import { Provider } from 'react-redux';
let store = createStore(toDoReducer, initialState);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
