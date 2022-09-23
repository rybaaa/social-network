import React from "react";
import s from './Header.module.css';


export const Header = ()=>{
    return (
        <header className={s.header}>
            <img className = {s.header_img} src='https://i.etsystatic.com/22231521/r/il/4d30c8/2591560002/il_570xN.2591560002_cwao.jpg'></img>
        </header>
    )
}