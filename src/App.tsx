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
import  {StoreType} from "./redux/state";


type PropsType = {
    store:StoreType
}

function App(props:PropsType) {
    const state = props.store.getState()
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav state={state.sidebarPage}/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() =>
                        <Profile
                            state={state.profilePage}
                            addPost={props.store.addPost.bind(props.store)}
                            newText = {state.profilePage.newText}
                            newTextCallback={props.store.newTextCallback.bind(props.store)}
                        />}/>
                    <Route path='/messages' render={() =>
                        <Messages
                            state={state.messagesPage}
                            addMessage={props.store.addMessage.bind(props.store)}
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
