import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import avatar from '../../assets/img/avatar-svgrepo-com.svg'
import loginButton from '../../assets/img/login.svg'

type HeaderPropsType = {
    id: number | null
    isAuth: boolean
    login: string
    avatar: string
}

const onClickHandler = () => {
    return <NavLink to={'/login'}></NavLink>
}
export const Header = (props: HeaderPropsType) => {
    return (
        <div className={s.header}>
            <img alt={'site_logo'} className={s.header_img}
                 src='https://i.etsystatic.com/22231521/r/il/4d30c8/2591560002/il_570xN.2591560002_cwao.jpg'></img>
            {props.isAuth
                ? <div className={s.login_block}>
                    <div>
                        <img alt={'avatar'} className={s.img_avatar}
                             src={props.avatar === null ? avatar : props.avatar}/>
                    </div>
                    <div className={s.login}>{`Hello ${props.login}!`}</div>
                </div>
                : <div className={s.btn_login}>
                    <img src={loginButton} onClick={onClickHandler} alt={'login_button'}/>
                </div>
            }
        </div>
    )
}