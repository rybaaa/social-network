import React from "react";
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPost";
import {Post} from "./MyPosts/Post/Post";

type MainPhotoType = {
    title:string
}

export const Profile = (props:MainPhotoType)=>{
    return (
        <div className={s.content}>
            <div>
                <img src ={props.title}></img>
            </div>
            <div>
                ava+description
            </div>
            <MyPosts />
            <Post message = 'Hello Im here' />
            <Post message = 'Today is my birthday'  />

        </div>
    )
}