import React from "react";
import s from './MyPost.module.css';
import {Post} from "./Post/Post";
import {ProfilePageType} from "../../../redux/state";


export const MyPosts = (props:ProfilePageType) => {


    let postElement = props.posts.map(el => <Post id = {el.id} post={el.post} likes={el.likes}/>)

    return (
        <div>
            <div>
                My Posts
            </div>
            <textarea className={s.mypost_textarea}></textarea>
            <button className={s.button_area}>Add Post</button>
            {postElement}
        </div>
    )
}