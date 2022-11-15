import React from "react";
import {addMessageAC, DialogsPageType, newMessageTextAC} from "../../redux/dialogsReducer";
import {Messages} from "./Messages";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStoreType} from "../../redux/redux-store";
//
// type stateMessagesType = {
//     store: AppStoreType
// }

// export const MessagesContainer = (props: stateMessagesType) => {
//     let state = props.store.getState().dialogsPage
//
//     const addMessage = (message:string) => {
//         if (message !== '') {
//             props.store.dispatch(addMessageAC(message))
//             props.store.dispatch(newMessageTextAC(''))
//         } else {
//             alert('Edit Message')
//         }
//     }
//     const onChangeHandler = (text:string) => {
//         props.store.dispatch(newMessageTextAC(text))
//     }
//
//     return (
//         <div className={s.dialogs}>
//             <Messages
//                 state = {state}
//                 addMessage={addMessage}
//                 onChangeHandler={onChangeHandler}
//             />
//         </div>
//     )
// }

type MapStatePropsType = {
    dialogsPage: DialogsPageType
}

type MapDispatchPropsType = {
    addMessage: (message: string) => void
    onChangeHandler: (text: string) => void
}

export type MessagesPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppStoreType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch:Dispatch):MapDispatchPropsType => {
    return {
        addMessage: (message: string) => {
            dispatch(addMessageAC(message));
            dispatch(newMessageTextAC(''));
        },
        onChangeHandler: (text: string) => {
            dispatch(newMessageTextAC(text))
        }
    }
}

export const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)