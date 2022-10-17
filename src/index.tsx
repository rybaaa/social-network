import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { subscribe} from "./redux/state";

const renderTree = () => {
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );
}
renderTree()

subscribe(renderTree)
