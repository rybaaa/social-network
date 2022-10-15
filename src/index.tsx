import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {RootStateType} from "./redux/state";
import {renderTree} from "./render";

renderTree(state)
