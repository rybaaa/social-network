import React from 'react';
import s from './Users.module.css'
import avatar from '../../assets/img/avatar-svgrepo-com.svg'
import {UsersType} from "../../redux/userReducer";

type UserPropsType = {
    totalUsers: number
    pagesize: number
    currentPage: number
    onPageChanged: (page: number) => void
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    users:UsersType[]
}

export const Users = (props:UserPropsType) => {
    let pagesCount = Math.ceil(props.totalUsers / props.pagesize);
    let pages = []
    for (let i = 1; i <= 10; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div className={s.pages}>
                {pages.map(p => <span key={p} onClick={() => {
                    props.onPageChanged(p)
                }} className={props.currentPage === p ? s.selectedPage : s.page}>{p}</span>)}
                {<span>...</span>}
                {<span key={pagesCount} onClick={() => {
                    props.onPageChanged(pagesCount)
                }} className={props.currentPage === pagesCount ? s.selectedPage : s.page}>{pagesCount}</span>}

            </div>
            <div> {props.users.map(u => <div key={u.id} className={s.block}>
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
        </div>
    )
}

