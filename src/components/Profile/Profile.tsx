import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {postType, ProfileType} from "../../redux/profileReducer";

export type ProfilePagePropsType = {
    newText: string
    posts: postType[]
    profile: ProfileType
}

export const Profile = (props: ProfilePagePropsType) => {
    return (
        <div>
            <ProfileInfo {...props}/>
            <MyPostsContainer/>
        </div>
    )
}