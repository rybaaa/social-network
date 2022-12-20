import React, {ChangeEvent} from "react";
import s from './Messages.module.css'
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {MessageItems} from "./MessageItem/MessageItem";
import {MessagesPropsType} from "./MessagesContainer";

export const Messages = (props: MessagesPropsType) => {
    let dialogsElements = props.dialogsPage.dialogs.map(el => <DialogsItem key={el.id} name={el.name} id={el.id}
                                                               avatar={el.avatar}/>)

    let messagesElements = props.dialogsPage.messages.map(el => <MessageItems key={el.id} message={el.message} id={el.id}
                                                                  />)
    const addMessage = () => {
        props.addMessage(props.dialogsPage.newMessage)
    }


    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangeHandler(e.currentTarget.value)
    }

    let sendMessageElement = <div className={s.sendmessageblock}>
        <textarea
            value={props.dialogsPage.newMessage}
            onChange={onChangeHandler}
        ></textarea>
        <button onClick={addMessage}>Send</button>
    </div>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messagesItems}>
                {messagesElements}
                {sendMessageElement}
            </div>
        </div>

    )
}