import React from "react";
import s from './Messages.module.css'
import {NavLink} from "react-router-dom";

type DialogsType = {
    name:string
    id:number
}

type MessageType = {
    message:string
}


export const Messages = () => {

    const Dialogs = (props:DialogsType) => {
        return (
            <div className={s.item}>
                <NavLink to={'/messages/' + props.id}>{props.name}</NavLink>
            </div>
        )
    }

    const MessageItems = (props:MessageType) => {
        return (
            <div className={s.items}>
                {props.message}
            </div>
        )
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <Dialogs name={'Victor'} id={1} />
                <Dialogs name={'Alex'} id={2} />
                <Dialogs name={'John'} id={3} />
                <Dialogs name={'Brad'} id={4} />

            </div>
            <div className={s.messagesItems}>
                <MessageItems message={'Hi'}/>
                <MessageItems message={'What is your aim?'}/>
                <MessageItems message={'Good Luck!'}/>
                <MessageItems message={'Have fun'}/>

            </div>
        </div>
    )
}