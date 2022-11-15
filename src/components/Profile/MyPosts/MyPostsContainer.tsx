import React from "react";
import {addPostAC, newTextCallbackAC, ProfilePageType} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {AppStoreType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {newMessageTextAC} from "../../../redux/dialogsReducer";
import {connect} from "react-redux";


//
// export const MyPostsContainer = (props: MyPostsTypes) => {
//     let state = props.store.getState()
//
//     let addPost = (post:string) => {
//         props.store.dispatch(addPostAC(post))
//         props.store.dispatch(newTextCallbackAC(''))
//     }
//
//     const onChangeHandler = (text:string) => {
//         props.store.dispatch(newTextCallbackAC(text))
//     }
//
//     return (
//         <div>
//             <MyPosts addPost={addPost}
//                      onChangeHandler={onChangeHandler}
//                      posts={state.profilePage.posts}
//                      newText={state.profilePage.newText}
//             />
//         </div>
//     )
// }

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