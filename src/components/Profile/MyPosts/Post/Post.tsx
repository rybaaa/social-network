import React from "react";
import s from './Post.module.css';

type PostType = {
    avatar:string
    id: string
    post: string
    likes: number
}

export const Post = (props: PostType) => {
    return (
        <div className={s.postblock}>
            <img className={s.avatar}
                 src={props.avatar}></img>
            <div className={s.borderblock}>
                <div className={s.post}>
                    {props.post}
                </div>
                <div className={s.likes}>
                    {props.likes} <img src='https://www.svgrepo.com/show/28731/like.svg'/>
                </div>
            </div>

        </div>
    )
}
