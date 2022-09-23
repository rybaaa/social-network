import s from './ProfileInfo.module.css'
import React from "react";

export const ProfileInfo = () => {
    return (
        <div>
            <img className={s.img_profile} src='https://www.pngitem.com/pimgs/m/560-5603874_product-image-logo-avatar-minimalist-flat-line-hd.png'></img>
            <h3>My first public page in social network</h3>
        </div>
    )
}