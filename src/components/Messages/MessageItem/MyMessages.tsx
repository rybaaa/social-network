import React from 'react';
import s from "../Messages.module.css";

type addNewMessageType = {
    message: string
    avatar:string
}

export const MessageItems = (props: addNewMessageType) => {

    return (
            <div className={s.messages}>
                <div className={s.imageAndText}>
                    <div>
                        <img src={props.avatar}/></div>
                    <div className={s.messageText}>
                        <div className={s.name}>
                            {props.message}
                        </div>
                    </div>
                </div>
            </div>
    )
}