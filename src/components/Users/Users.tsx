import React from 'react';
import {UsersPagePropsType} from "./UsersContainer";
import s from './Users.module.css'
import axios from "axios";
import avatar from '../../assets/img/avatar-svgrepo-com.svg'

export const Users = (props: UsersPagePropsType) => {
    const getUsers = () => {
        if (!props.users.length) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
                props.setUsers(response.data.items)
            })
        }
    }


    return (
        <div>
            <button onClick={getUsers}>Get users</button>
            {props.users.map(u => <div key={u.id} className={s.block}>
                <div className={s.avatar_btn_block}>
                    <img src={u.photos?.small === null ? avatar : u.photos.small}/>
                    {u.followed
                        ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>}
                </div>
                <div className={s.user_block}>
                    <div className={s.user_block_info}>
                        <div>{u.name}</div>
                        <div>{'u.location.country'},{'u.location.city'}</div>
                    </div>
                    <div>
                        <div className={s.status}>{u.status}</div>
                    </div>
                </div>
            </div>)}
        </div>
    );
};

