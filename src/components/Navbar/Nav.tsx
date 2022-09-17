import React from "react";
import s from './Nav.module.css';


export const Nav = () => {
    return (
        <nav className={s.nav}>
            <div>
                <a>Profile</a>
            </div>
            <div>
                <a> Messages</a>
            </div>
            <div>
                <a>News</a>
            </div>
            <div>
                <a> Music</a>
            </div>
            <div>
                <a>Settings</a>
            </div>
        </nav>
    )
}