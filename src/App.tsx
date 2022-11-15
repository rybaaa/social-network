import React from 'react';
import './App.css';
import {Nav} from "./components/Navbar/Nav";
import {Profile} from "./components/Profile/Profile";
import {Header} from "./components/Header/Header";
import {BrowserRouter, Route} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {MessagesContainer} from "./components/Messages/MessagesContaier";
import {AppStoreType} from "./redux/redux-store";

type AppPropsType = {
    store: AppStoreType
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav state={props.store.sidebar}/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() =>
                        <Profile
                        />}/>
                    <Route path='/messages' render={() =>
                        <MessagesContainer/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );

}

export default App;
