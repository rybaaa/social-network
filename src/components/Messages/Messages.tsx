import React from "react";
import s from './Messages.module.css'
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {MessageItems} from "./MessageItem/MessageItem";
import {MessagesPropsType} from "./MessagesContainer";
import {useFormik} from "formik";
import {Button, FormGroup, TextField} from "@mui/material";
import {Redirect} from "react-router-dom";

export const Messages = (props: MessagesPropsType) => {
    let dialogsElements = props.dialogsPage.dialogs.map(el => <DialogsItem key={el.id} name={el.name} id={el.id}
                                                                           avatar={el.avatar}/>)

    let messagesElements = props.dialogsPage.messages.map(el => <MessageItems key={el.id} message={el.message}
                                                                              id={el.id}
    />)
    const addMessage = (message:string) => {
        props.addMessage(message)
    }
    if(!props.isAuth) return <Redirect to={'login'}/>
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messagesItems}>
                {messagesElements}
                <AddMessageForm addMessage = {addMessage}/>
            </div>
        </div>
    )
}

type AddMessagePropsType = {
    addMessage: (message: string) => void
}
const AddMessageForm = (props: AddMessagePropsType) => {
    const formik = useFormik({
        initialValues: {
            message: ''
        },
        onSubmit: values => {
            formik.resetForm()
            props.addMessage(values.message)
        }
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <FormGroup>
                <TextField
                    size={'small'}
                    label="Message"
                    margin="normal"
                    {...formik.getFieldProps('message')}
                />
                <Button type={'submit'} variant={'contained'} color={'primary'}>
                    Send
                </Button>
            </FormGroup>
        </form>


    )
}