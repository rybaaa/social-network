import React, {ChangeEvent} from "react";
import s from './Messages.module.css'
import {addMessageAC, newMessageTextAC} from "../../redux/dialogsReducer";
import {AppStoreType} from "../../redux/redux-store";
import {Messages} from "./Messages";

type stateMessagesType = {
    store: AppStoreType
}

export const MessagesContainer = (props: stateMessagesType) => {
    let state = props.store.getState().dialogsPage

    const addMessage = (message:string) => {
        if (message !== '') {
            props.store.dispatch(addMessageAC(message))
            props.store.dispatch(newMessageTextAC(''))
        } else {
            alert('Edit Message')
        }
    }
    const onChangeHandler = (text:string) => {
        props.store.dispatch(newMessageTextAC(text))
    }

    return (
        <div className={s.dialogs}>
            <Messages
                state = {state}
                addMessage={addMessage}
                onChangeHandler={onChangeHandler}


            />
        </div>

    )
}