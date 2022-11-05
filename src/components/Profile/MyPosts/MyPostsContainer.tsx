import React from "react";
import {addPostAC, newTextCallbackAC} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {AppStoreType} from "../../../redux/redux-store";

type MyPostsTypes = {
    store:AppStoreType
}

export const MyPostsContainer = (props: MyPostsTypes) => {
    let state = props.store.getState()

    let addPost = (post:string) => {
        props.store.dispatch(addPostAC(post))
        props.store.dispatch(newTextCallbackAC(''))
    }

    const onChangeHandler = (text:string) => {
        props.store.dispatch(newTextCallbackAC(text))
    }

    return (
        <div>
            <MyPosts addPost={addPost}
                     onChangeHandler={onChangeHandler}
                     posts={state.profilePage.posts}
                     newText={state.profilePage.newText}
            />
        </div>
    )
}