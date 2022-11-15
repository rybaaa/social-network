import React from "react";
import {addPostAC, newTextCallbackAC, ProfilePageType} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {AppStoreType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";


type MapStatePropsType = {
    profilePage:ProfilePageType
}

type MapDispatchPropsType = {
    addPost: (post: string) => void
    onChangePostHandler: (text: string) => void
}

export type ProfilePagePropsType = MapStatePropsType & MapDispatchPropsType


let mapStateToProps = (state: AppStoreType): MapStatePropsType => {
    return {
        profilePage:state.profilePage
    }
}

let mapDispatchToProps = (dispatch:Dispatch): MapDispatchPropsType => {
    return {
        addPost: (post: string) => {
            dispatch(addPostAC(post));
            dispatch(newTextCallbackAC(''));
        },
        onChangePostHandler: (text: string) => {
            dispatch(newTextCallbackAC(text));
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)