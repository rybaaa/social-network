import React from 'react';
import './App.css';
import Header from "./components/header/header";
import Technologies from "./components/technologies/technologies";


function App() {
    return (<div>
            <Header title={ 'Home' }/>
            <Header title={ 'News Feed' }/>
            <Header title={'Messages'}/>
            <Technologies title = {'html'}/>
            <Technologies title = {'css'}/>
            <Technologies title = {'ts'}/>
            <Technologies title = {'react'}/>
        </div>
    );
}

export default App;
