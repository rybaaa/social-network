import React from 'react';
import './App.css';
import {NavContainer} from "./components/Navbar/NavContainer";
import {Route, withRouter} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {MessagesContainer} from "./components/Messages/MessagesContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Login from "./components/Login/Login";
import ErrorSnackbar from "./components/ErrorSnackbar/ErrorSnackbar";
import {AppStoreType} from "./redux/redux-store";
import {connect} from "react-redux";
import {Preloader} from "./components/common/Preloader/Preloader";
import {initializeTC} from "./redux/appReducer";
import {compose} from 'redux';

type MapStateToPropsType = {
    isInitialized: boolean
}
type MapDispatchToPropsType = {
    initializeTC: () => void
}
type AppPropsType = MapStateToPropsType & MapDispatchToPropsType

class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initializeTC()
    }

    render() {
        if (!this.props.isInitialized) return <Preloader/>
        return (
            <div className='mainWrapper'>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <NavContainer/>
                    <ErrorSnackbar/>
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
        );
    }
}

let mapStateToProps = (state: AppStoreType): MapStateToPropsType => {
    return {
        isInitialized: state.app.isInitialized
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {initializeTC}),
    withRouter
)(App)
