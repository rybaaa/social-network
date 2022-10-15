import React from 'react';
import s from "../Messages.module.css";
import state, {addMessage, messagesType} from "../../../redux/state";

type addNewMessageType = {
    message: string
    id: number
    addMessage: (message: string) => void

}

export const MessageItems = (props: addNewMessageType) => {
    let newMessage = React.createRef<HTMLTextAreaElement>()

    const addMessage = () => {
        if (newMessage.current) {
            props.addMessage(newMessage.current.value)
            console.log(state)
        }
    }
    return (
        <div>
            <div className={s.messages}>
                {props.message}
            </div>
            <div className={s.sendmessageblock}>
                <textarea ref={newMessage}></textarea>
                <button onClick={addMessage}>Send</button>
            </div>
        </div>
    )
}