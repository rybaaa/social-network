import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/state";

const renderTree = () => {
    ReactDOM.render(
        <App store={store} />,
        document.getElementById('root')
    );
}
renderTree()

store.subscribe(renderTree)
