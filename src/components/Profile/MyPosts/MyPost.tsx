import React, {ChangeEvent} from "react";
import s from './MyPost.module.css';
import {Post} from "./Post/Post";
import {ActionTypes, postType} from "../../../redux/state";

type MyPostsTypes = {
    newText:string
    posts: postType[]
    // addPost: (post: string) => void
    // newTextCallback:(text:string)=>void
    dispatch:(action:ActionTypes)=>void
}

export const MyPosts = (props: MyPostsTypes) => {
    let postElement = props.posts.map(el => <Post id={el.id} post={el.post} likes={el.likes}/>)

    let addPost = () => {
        props.dispatch( {type: 'ADD-POST', post: props.newText } )
        props.dispatch(  {type:'NEW-TEXT-CALLBACK', newtext: ''})
    }

    const onChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>)=>{props.dispatch({'type': 'NEW-TEXT-CALLBACK', newtext:e.currentTarget.value})}

    return (
        <div>
            <div>
                My Posts
            </div>
            <textarea className={s.mypost_textarea} value = {props.newText} onChange={onChangeHandler}/>
            <button onClick={addPost} className={s.button_area}>Add Post</button>
            {postElement}
        </div>
    )
}