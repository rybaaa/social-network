import React from "react";
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPost";
import {Post} from "./MyPosts/Post/Post";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

type MainPhotoType = {
    title: string
}

export const Profile = (props: MainPhotoType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts/>
            <Post message={'Today is my birthday'} likes ={3}/>
            <Post message={'Today is my birthday'} likes ={22}/>

        </div>
    )
}