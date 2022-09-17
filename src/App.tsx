import React from 'react';
import './App.css';

import {Nav} from "./components/Navbar/Nav";
import {Profile} from "./components/Profile/Profile";
import {Header} from "./components/Header/Header";


function App() {
    return (<div className='app-wrapper'>
            <Header
                title={'https://dw0i2gv3d32l1.cloudfront.net/uploads/stage/stage_image/64230/optimized_large_thumb_stage.jpg'}/>
            <Nav/>
            <Profile title={'https://thumbs.dreamstime.com/b/landscape-nature-mountan-alps-rainbow-76824355.jpg'}/>
        </div>
    );
}

export default App;
