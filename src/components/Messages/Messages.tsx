import React from "react";
import s from './Messages.module.css'
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {MessageItems} from "./MessageItem/MessageItem";
import {ActionTypes, MessagesPageType} from "../../redux/state";

type stateMessagesType = {
    state: MessagesPageType
    // addMessage: (message:string) => void
    dispatch:(action:ActionTypes)=>void
}

export const Messages = (props: stateMessagesType) => {


    let dialogsElements = props.state.dialogs.map(el => <DialogsItem name={el.name} id={el.id} avatar={el.avatar}/>)

    let messagesElements = props.state.messages.map(el => <MessageItems message={el.message} id={el.id} dispatch={props.dispatch}/>)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messagesItems}>
                {messagesElements}
            </div>
        </div>

    )
}