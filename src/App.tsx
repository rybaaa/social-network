import React from 'react';
import './App.css';

import {Nav} from "./components/Navbar/Nav";
import {Profile} from "./components/Profile/Profile";
import {Header} from "./components/Header/Header";
import {Messages} from "./components/Messages/Messages";
import {BrowserRouter, Route} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";


function App() {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/messages' component={Messages}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );

}

export default App;
