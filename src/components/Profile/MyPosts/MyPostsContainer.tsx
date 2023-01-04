import React from "react";
import {addPostAC, ProfilePageType} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {AppStoreType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";


type MapStatePropsType = {
    profilePage:ProfilePageType
    avatar:string
}

type MapDispatchPropsType = {
    addPost: (post: string) => void
}

export type ProfilePagePropsType = MapStatePropsType & MapDispatchPropsType


let mapStateToProps = (state: AppStoreType): MapStatePropsType => {
    return {
        profilePage:state.profilePage,
        avatar:state.auth.avatar
    }
}

let mapDispatchToProps = (dispatch:Dispatch): MapDispatchPropsType => {
    return {
        addPost: (post: string) => {
            dispatch(addPostAC(post));
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)