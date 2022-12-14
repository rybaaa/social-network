import React from "react";
import s from './Header.module.css';
import {Link} from "react-router-dom";
import avatar from '../../assets/img/avatar-svgrepo-com.svg'
import loginButton from '../../assets/img/login.svg'
import LogoutIcon from '@mui/icons-material/Logout';

type HeaderPropsType = {
    id: number | null
    isAuth: boolean
    login: string
    avatar: string
    logout: () => void
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
                    <LogoutIcon style={{cursor: 'pointer'}} onClick={props.logout} color="primary"/>
                </div>
                : <div className={s.btn_login}>
                    <Link to='login'>
                        <img src={loginButton} alt={'login_button'}/>
                    </Link>
                </div>
            }
        </div>
    )
}