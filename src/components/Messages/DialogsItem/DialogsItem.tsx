import React from 'react';
import s from "../Messages.module.css";
import {NavLink} from "react-router-dom";
import {dialogsType} from "../../../redux/dialogsReducer";


export const DialogsItem = (props:dialogsType) => {
    return (
        <div className={s.block}>
            <NavLink style={{textDecoration:'none', color:'black'}} to={'/messages/' + props.id}>
                <div className={s.block__item}>
                    <div><img className={s.avatar} src = {props.avatar}/></div>
                    <div>{props.name}</div>
                </div>
            </NavLink>
        </div>
    )
}