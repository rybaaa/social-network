import React, {ChangeEvent} from "react";
import s from './Messages.module.css'
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {MessageItems} from "./MessageItem/MessageItem";
import {
    ActionTypes,
    MessagesPageType
} from "../../redux/store";
import {addMessageAC, newMessageTextAC} from "../../redux/dialogsReducer";

type stateMessagesType = {
    state: MessagesPageType
    // addMessage: (message:string) => void
    dispatch: (action: ActionTypes) => void
}

export const Messages = (props: stateMessagesType) => {


    let dialogsElements = props.state.dialogs.map(el => <DialogsItem key={el.id} name={el.name} id={el.id}
                                                                     avatar={el.avatar}/>)

    let messagesElements = props.state.messages.map(el => <MessageItems key={el.id} message={el.message} id={el.id}
                                                                        dispatch={props.dispatch}/>)
    const addMessage = () => {
        if (props.state.newMessage !== '') {
            props.dispatch(addMessageAC(props.state.newMessage))
            props.dispatch(newMessageTextAC(''))
        } else {
            alert('Edit Message')
        }

    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(newMessageTextAC(e.currentTarget.value))
    }

    let sendMessageElement = <div className={s.sendmessageblock}>
        <textarea
            value={props.state.newMessage}
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