import React from "react";
import {addMessageAC, DialogsPageType} from "../../redux/dialogsReducer";
import {Messages} from "./Messages";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {AppStoreType} from "../../redux/redux-store";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {UserDataType} from "../../redux/authReducer";

type MapStatePropsType = {
    dialogsPage: DialogsPageType
    isAuth:UserDataType
}

type MapDispatchPropsType = {
    addMessage: (message: string) => void
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
        }
    }
}

export const MessagesContainer = compose<React.ComponentType>(
    WithAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(Messages)