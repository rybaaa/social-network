import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import avatar from '../../assets/img/avatar-svgrepo-com.svg'

type HeaderPropsType = {
    id:number | null
    isAuth: boolean
    login: string
    avatar:string
}

const onClickHandler = () => {
    return <NavLink to={'/login'}></NavLink>
}
export const Header = (props: HeaderPropsType) => {
    return (
        <div className={s.header}>
            <img className={s.header_img}
                 src='https://i.etsystatic.com/22231521/r/il/4d30c8/2591560002/il_570xN.2591560002_cwao.jpg'></img>
            {props.isAuth
                ? <div className={s.login_block}>
                    <div>
                        <img className={s.img_avatar} src={props.avatar === null ? avatar : props.avatar}/>
                    </div>
                    <div className={s.login}>{`Hello ${props.login}!`}</div>
                </div>
                : <button onClick={onClickHandler} className={s.btn}>LOGIN</button>
            }
        </div>
    )
}