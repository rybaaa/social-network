import React from 'react';
import './App.css';
import {NavContainer} from "./components/Navbar/NavContainer";
import {BrowserRouter, Route} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {MessagesContainer} from "./components/Messages/MessagesContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {Login} from "./components/Login/Login";


function App() {
    return (
        <BrowserRouter>
            <div className='mainWrapper'>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <NavContainer />
                    <div className='app-wrapper-content'>
                        <Route path='/profile/:userId?' render={() =>
                            <ProfileContainer
                            />}/>
                        <Route path='/messages' render={() =>
                            <MessagesContainer/>}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                    </div>
                </div>
            </div>

        </BrowserRouter>
    );

}

export default App;
