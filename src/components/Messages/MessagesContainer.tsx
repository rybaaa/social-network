import React from "react";
import {addMessageAC, DialogsPageType, newMessageTextAC} from "../../redux/dialogsReducer";
import {Messages} from "./Messages";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStoreType} from "../../redux/redux-store";
import {UserDataType} from "../../redux/authReducer";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";

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
        dialogsPage: state.dialogsPage,
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

export const MessagesContainer = WithAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Messages))