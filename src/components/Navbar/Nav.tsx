import React from "react";
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";
import {MyFriends} from "./MyFriends";
import {friendsType} from "../../redux/sidebarReducer";
import logo from '../../assets/img/logo.png'
import profile from '../../assets/img/profile.svg'
import messages from '../../assets/img/messages.svg'
import find from '../../assets/img/find.svg'
import music from '../../assets/img/music.svg'
import news from '../../assets/img/news.svg'
import settings from '../../assets/img/settings.svg'

type NavPropsType = {
    friends: friendsType[]
}

export const Nav = (props: NavPropsType) => {

    let friend = props.friends.map((f) => <MyFriends key={f.id} id={f.id} name={f.name} avatar={f.avatar}/>)

    return (
        <nav className={s.nav}>
            <div className={s.navImg}>
                <img src={logo}/>
            </div>
            <div className={s.border}></div>
            <div className={s.pagesBlock}>
                <div className={s.item}>
                    <img src={profile}/>
                    <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
                </div>
                <div className={s.item}>
                    <img src={messages}/>
                    <NavLink to='/messages' activeClassName={s.activeLink}> Messages</NavLink>
                </div>
                <div className={s.item}>
                    <img src={find}/>
                    <NavLink to='/users' activeClassName={s.activeLink}> Users</NavLink>
                </div>
                <div className={s.item}>
                    <img src={news}/>
                    <NavLink to='/news' activeClassName={s.activeLink}>News</NavLink>
                </div>
                <div className={s.item}>
                    <img src={music}/>
                    <NavLink to='/music' activeClassName={s.activeLink}> Music</NavLink>
                </div>
                <div className={s.item}>
                    <img src={settings}/>
                    <NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink>
                </div>
            </div>
            <div className={s.border}></div>
            <div className={s.friends}>
                Friends:{props.friends.length}
                <div className={s.frienditem}>{friend}</div>
            </div>
        </nav>
    )
}
