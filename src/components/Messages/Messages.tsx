import React from "react";
import s from './Messages.module.css'
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {MessagesPropsType} from "./MessagesContainer";
import {useFormik} from "formik";
import {Button, FormGroup, TextField} from "@mui/material";
import {Redirect} from "react-router-dom";
import {MessageItems} from "./MessageItem/MyMessages";

export const Messages = (props: MessagesPropsType) => {
    let dialogsElements = props.dialogsPage.dialogs.map(el => <DialogsItem key={el.id} name={el.name} id={el.id}
                                                                           avatar={el.avatar}/>)
    let messagesElements = props.dialogsPage.messages.map(el => <MessageItems key={el.id}
                                                                              message={el.message}
                                                                              avatar={props.dialogsPage.dialogs[1].avatar}
    />)

    // let myMessages =  <MessageItems message={props.dialogsPage.messages[0].message}
    //                                 avatar={props.isAuth.avatar}/>
    // let friendMessages =  <MessageItems message={props.dialogsPage.messages[2].message}
    //                                 avatar={props.dialogsPage.dialogs[0].avatar}/>

    const addMessage = (message: string) => {
        props.addMessage(message)
    }
    if (!props.isAuth) return <Redirect to={'login'}/>
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messagesItems}>
                {messagesElements}
                <AddMessageForm addMessage={addMessage}/>
            </div>
        </div>
    )
}

type AddMessagePropsType = {
    addMessage: (message: string) => void
}

type MessageErrorType = {
    message?: string
}
const AddMessageForm = (props: AddMessagePropsType) => {
    const formik = useFormik({
        initialValues: {
            message: ''
        },
        validate: (values) => {
            const errors: MessageErrorType = {}
            if (!values.message) {
                errors.message = 'Required'
            }
            if (!values.message.length) {
                errors.message = 'At least 1 symbol'
            }
            return errors
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
                    error={formik.touched.message && Boolean(formik.errors.message)}
                    size={'small'}
                    label="Message"
                    margin="normal"
                    {...formik.getFieldProps('message')}
                />
                {formik.errors.message &&
                    <div style={{color: 'red'}}>{formik.errors.message}</div>}
                <Button type={'submit'} variant={'contained'} color={'primary'}>
                    Send
                </Button>
            </FormGroup>
        </form>


    )
}