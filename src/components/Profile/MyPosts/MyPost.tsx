import React from "react";
import s from './MyPost.module.css';
import {Post} from "./Post/Post";

export const MyPosts = () => {

    let posts = [
        {post: 'Today is my birthday', likes: 3},
        {post: 'My first post', likes: 22}
    ]

    let postElement = posts.map(el => <Post message={el.post} likes={el.likes}/>)

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