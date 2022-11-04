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
import {ActionTypes, StoreType} from "./redux/store";
import {AppStoreType} from "./redux/redux-store";


type PropsType = {
    store:AppStoreType
    dispatch:(action:ActionTypes)=>void
}

function App(props:PropsType) {
    const state = props.store.getState()
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav state={state.sidebar}/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() =>
                        <Profile
                            state={state.profilePage}
                            dispatch={props.dispatch}
                            newText={state.profilePage.newText}
                        />}/>
                    <Route path='/messages' render={() =>
                        <Messages
                            state={state.dialogsPage}
                            dispatch={props.dispatch}
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
