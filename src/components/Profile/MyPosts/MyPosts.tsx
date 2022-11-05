import React, {ChangeEvent} from "react";
import s from './MyPost.module.css';
import {Post} from "./Post/Post";
import {postType} from "../../../redux/store";

type MyPostsTypes = {
    addPost: (post: string) => void
    onChangeHandler: (text: string) => void
    newText: string
    posts: postType[]
    // addPost: (post: string) => void
    // newTextCallback:(text:string)=>void
    // dispatch: (action: ActionTypes) => void
}

export const MyPosts = (props: MyPostsTypes) => {
    let postElement = props.posts.map(el => <Post key={el.id} id={el.id} post={el.post} likes={el.likes}/>)

    let addPost = () => {
        props.addPost(props.newText)
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangeHandler(e.currentTarget.value)
    }

    return (
        <div>
            <div>
                My Posts
            </div>
            <textarea className={s.mypost_textarea} value={props.newText} onChange={onChangeHandler}/>
            <button onClick={addPost} className={s.button_area}>Add Post</button>
            {postElement}
        </div>
    )
}