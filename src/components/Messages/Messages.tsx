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

    let dialogs = [
        {id:1, name:'Victor'},
        {id:2, name:'Alex'},
        {id:3, name:'John'},
        {id:4, name:'Brad'}
    ]

    let messages = [
        {message: 'Hi'},
        {message: 'What is your aim?'},
        {message: 'Good Luck!'},
        {message: 'Have fun'}
    ]
    
    let dialogsElements = dialogs.map(el=> <Dialogs name={el.name} id={el.id}/>)

    let messagesElements = messages.map(el=> <MessageItems message={el.message}/>)
    
    

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