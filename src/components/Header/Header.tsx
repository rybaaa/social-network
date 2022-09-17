import React from "react";
import s from './Header.module.css';

type HeaderTitleType = {
    title:string
}

export const Header = (props:HeaderTitleType)=>{
    return (
        <header className={s.header}>
            <img className = {s.header_img} src={props.title}></img>
        </header>
    )
}