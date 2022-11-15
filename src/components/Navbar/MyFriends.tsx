import React from 'react';
import s from './MyFriends.module.css'
import {friendsType} from "../../redux/sidebarReducer";

export const MyFriends = (props:friendsType) => {
    return (
        <div className={s.friend}>
            <img src={props.avatar}/>
            {props.name}
        </div>
    );
};
