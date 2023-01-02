import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {postType, ProfileType} from "../../redux/profileReducer";

export type ProfilePagePropsType = {
    posts: postType[]
    profile: ProfileType
    status:string
    updateStatus:(status:string)=>void
    isAuth:boolean
}

export const Profile = (props: ProfilePagePropsType) => {
    return (
        <div>
            <ProfileInfo {...props}/>
            <MyPostsContainer/>
        </div>
    )
}