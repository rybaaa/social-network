import React from "react";
import s from './Post.module.css';

type PostType = {
    message: string
    likes: number
}


export const Post = (props: PostType) => {
    return (
        <div>
            <img className={s.avatar}
                 src='https://www.pngitem.com/pimgs/m/560-5603874_product-image-logo-avatar-minimalist-flat-line-hd.png'></img>
            {props.message}
            <div>
                <span>{props.likes} likes</span>
            </div>

        </div>
    )
}
