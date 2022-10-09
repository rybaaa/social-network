import React from 'react';
import s from "../Messages.module.css";
import {messagesType} from "../../../redux/state";


export const MessageItems = (props:messagesType) => {
    return (
        <div className={s.messages}>
            {props.message}
        </div>
    )
}