import React from "react";
import s from './MyPost.module.css';

export const MyPosts = () => {
    return (
        <div>
            <div>
                My Posts
            </div>
            <textarea className={s.mypost_textarea}></textarea>
            <button className={s.button_area}>Add Post</button>
        </div>
    )
}