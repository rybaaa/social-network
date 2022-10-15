import React from "react";
import s from './MyPost.module.css';
import {Post} from "./Post/Post";
import {postType, ProfilePageType} from "../../../redux/state";

type MyPostsTypes = {
    posts: postType[]
    addPost: (post: string) => void
}

export const MyPosts = (props: MyPostsTypes) => {


    let postElement = props.posts.map(el => <Post id={el.id} post={el.post} likes={el.likes}/>)
    let newPost = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        if (newPost.current) {
            props.addPost(newPost.current.value)
            newPost.current.value=''
        }

    }

    return (
        <div>
            <div>
                My Posts
            </div>
            <textarea ref={newPost} className={s.mypost_textarea}></textarea>
            <button onClick={addPost} className={s.button_area}>Add Post</button>
            {postElement}
        </div>
    )
}