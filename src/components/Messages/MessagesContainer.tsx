import React from "react";
import {addMessageAC, DialogsPageType, newMessageTextAC} from "../../redux/dialogsReducer";
import {Messages} from "./Messages";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStoreType} from "../../redux/redux-store";
import {UserDataType} from "../../redux/authReducer";

type MapStatePropsType = {
    dialogsPage: DialogsPageType
    isAuth: UserDataType
}

type MapDispatchPropsType = {
    addMessage: (message: string) => void
    onChangeHandler: (text: string) => void
}

export type MessagesPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppStoreType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth:state.auth
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