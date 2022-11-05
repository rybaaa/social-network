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
import {ActionTypes} from "./redux/store";
import {AppStoreType} from "./redux/redux-store";
import {MessagesContainer} from "./components/Messages/MessagesContaier";
import {log} from "util";


type AppPropsType = {
    store:AppStoreType
    dispatch:(action:ActionTypes)=>void
}

function App(props:AppPropsType) {
    const state = props.store.getState()
    console.log(state)
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav state={state.sidebar}/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() =>
                        <Profile
                            store={props.store}
                        />}/>
                    <Route path='/messages' render={() =>
                        <MessagesContainer
                            store={props.store}
                        />}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );

}

export default App;
