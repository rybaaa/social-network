import React from "react";
import {MyPosts} from "./MyPosts/MyPost";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {newTextCallback, ProfilePageType} from "../../redux/state";

type StatePostType = {
    newText:string
    state: ProfilePageType
    addPost: (post:string) => void
    newTextCallback:(text:string)=>void
}

export const Profile = (props: StatePostType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.state.posts}
                addPost={props.addPost}
                newText = {props.newText}
                newTextCallback = {props.newTextCallback}
            />
        </div>
    )
}