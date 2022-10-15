import React from "react";
import {MyPosts} from "./MyPosts/MyPost";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type StatePostType = {
    state: ProfilePageType
    addPost: (post:string) => void
}

export const Profile = (props: StatePostType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.state.posts}
                addPost={props.addPost}
            />
        </div>
    )
}