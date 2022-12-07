import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfilePageType} from "../../redux/profileReducer";



export const Profile = (props:ProfilePageType) => {
    return (
        <div>
            <ProfileInfo {...props}/>
            <MyPostsContainer/>
        </div>
    )
}