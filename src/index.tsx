import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/state";

const renderTree = () => {
    ReactDOM.render(
        <App
            store={store}
            dispatch = {store.dispatch.bind(store)}
        />,
        document.getElementById('root')
    );
}
renderTree()

store.subscribe(renderTree)
