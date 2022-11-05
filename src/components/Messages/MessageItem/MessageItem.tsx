import React from 'react';
import s from "../Messages.module.css";

type addNewMessageType = {
    message: string
    id: string
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