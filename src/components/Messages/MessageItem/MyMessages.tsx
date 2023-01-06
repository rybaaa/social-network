import React from 'react';
import s from "../Messages.module.css";

type addNewMessageType = {
    message: string
    avatar:string
}

export const MessageItems = (props: addNewMessageType) => {

    return (
        <div>
            <div className={s.messages}>
                {props.message}
            </div>
        </div>
    )
}