import React from 'react';
import s from "../Messages.module.css";

type addNewMessageType = {
    message: string
    avatar:string
}

export const MessageItems = (props: addNewMessageType) => {
    return (
        <div className={s.messagesWrapper}>
            <img className={s.avatar} src={props.avatar} alt={'avatar'}/>
            <div className={s.messages}>
                <span className={s.text}>{props.message}</span>
            </div>
        </div>
    )
}