import React from 'react';
import s from "../Messages.module.css";
import {NavLink} from "react-router-dom";
import {dialogsType} from "../../../redux/store";


export const DialogsItem = (props:dialogsType) => {
    return (
        <div className={s.block}>
            <NavLink to={'/messages/' + props.id}>
                <img className={s.avatar} src = {props.avatar}/>
                {props.name}
            </NavLink>
        </div>
    )
}