import React from "react";
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";
import {MyFriends} from "./MyFriends";
import {SidebarPageType} from "../../redux/sidebarReducer";


export const Nav = (props:SidebarPageType) => {

    let friend = props.friends.map((f) => <MyFriends key={f.id} id={f.id} name={f.name} avatar={f.avatar}/>)

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to ='/profile' activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to = '/messages' activeClassName={s.activeLink}> Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to ='/news' activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to ='/music' activeClassName={s.activeLink}> Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to ='/settings' activeClassName={s.activeLink}>Settings</NavLink>
            </div>
            <div className={s.friends}>
                Friends
                <div className={s.frienditem}>{friend}</div>
            </div>
        </nav>
    )
}