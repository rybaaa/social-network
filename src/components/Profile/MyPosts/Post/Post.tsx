import React from "react";
import s from './Post.module.css';
import {postType} from "../../../../redux/store";


export const Post = (props: postType) => {
    return (
        <div className={s.postblock}>
            <img className={s.avatar}
                 src='https://www.svgrepo.com/show/120282/avatar.svg'></img>
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
