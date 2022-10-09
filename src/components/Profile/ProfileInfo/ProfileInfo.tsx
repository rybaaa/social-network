import s from './ProfileInfo.module.css'
import React from "react";

export const ProfileInfo = () => {
    return (
        <div className={s.info}>
            <img className={s.img_profile} src='https://www.svgrepo.com/show/120282/avatar.svg'></img>
            <div>
                <h3>My first public page in social network</h3>
                <ul>
                    <li>Name: Alex</li>
                    <li>Y.O.: 25</li>
                    <li>Country: Belarus</li>
                </ul>
            </div>
        </div>
    )
}