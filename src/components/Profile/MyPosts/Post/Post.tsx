import React from "react";
import s from './Post.module.css';

type MessageType = {
    message: string;
}

type LikeCountsType = {
    likecounts:number
}

export const Post = (props:MessageType) => {
    return (
        <div>
            <div>
                <img className={s.avatar}
                     src='https://www.pngitem.com/pimgs/m/560-5603874_product-image-logo-avatar-minimalist-flat-line-hd.png'></img>
                {props.message}
                <div>
                    <span>likes</span>
                </div>

            </div>
        </div>
    )
}
