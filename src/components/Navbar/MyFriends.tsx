import React from 'react';
import {friendsType} from "../../redux/store";
import s from './MyFriends.module.css'

export const MyFriends = (props:friendsType) => {
    return (
        <div className={s.friend}>
            <img src={props.avatar}/>
            {props.name}
        </div>
    );
};
