import React from 'react';
import {UsersPagePropsType} from "./UsersContainer";
import s from './Users.module.css'
import {v1} from "uuid";

export const Users = (props: UsersPagePropsType) => {
    if (!props.users.length) {
        props.setUsers([
            {id:v1(), photoURL:'https://www.svgrepo.com/show/106358/avatar.svg',  name: 'Alex', status: 'Welcome', location : {city:'NY', country:'USA'}, followed: true},
            {id:v1(), photoURL:'https://www.svgrepo.com/show/113445/avatar.svg', name: 'Max', status: 'Not great not terrible', location : {city:'Amsterdam', country:'Netherlands'}, followed: false},
            {id:v1(), photoURL:'https://www.svgrepo.com/show/63886/avatar.svg', name: 'Charles', status: 'Yohoho', location : {city:'Monaco', country:'Monaco'}, followed: true}

        ])
    }
    return (
        <div>
            {props.users.map(u => <div key={u.id} className={s.block}>
                <div className={s.avatar_btn_block}>
                    <img src={u.photoURL}/>
                    {u.followed
                        ? <button onClick={()=>{props.unfollow(u.id)} }>Unfollow</button>
                        : <button onClick={()=>{props.follow(u.id)}}>Follow</button>}
                </div>
                <div className={s.user_block}>
                    <div className={s.user_block_info}>
                        <div>{u.name}</div>
                        <div>{u.location.country},{u.location.city}</div>
                    </div>
                    <div>
                        <div className={s.status}>{u.status}</div>
                    </div>
                </div>
            </div>)}
        </div>
    );
};

