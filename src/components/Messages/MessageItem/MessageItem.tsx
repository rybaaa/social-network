import React from 'react';
import s from "../Messages.module.css";
import {ActionTypes} from "../../../redux/state";

type addNewMessageType = {
    message: string
    id: string
    // addMessage: (message: string) => void
    dispatch:(action:ActionTypes)=>void

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