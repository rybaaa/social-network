import React from 'react';
import s from './Users.module.css'
import avatar from '../../assets/img/avatar-svgrepo-com.svg'
import {UsersType} from "../../redux/userReducer";
import {Preloader} from "../common/Preloader/Preloader";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

type UserPropsType = {
    totalUsers: number
    pageSize: number
    currentPage: number
    onPageChanged: (page: number) => void
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    users: UsersType[]
    isFetching: boolean
    isFollowing: Array<number>
    toggleIsFollowing: (isFollowing: boolean, userId:number) => void
}

export const Users = (props: UserPropsType) => {
    let pagesCount = Math.ceil(props.totalUsers / props.pageSize);
    let pages = []
    for (let i = 1; i <= 10; i++) {
        pages.push(i)
    }
    return (
        <div className={s.wrapper}> {props.isFetching ? <Preloader/> : null}
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
                    <NavLink to={'/profile/' + u.id} activeClassName={s.activeLink}>
                        <img src={u.photos?.small === null ? avatar : u.photos.small}/>
                    </NavLink>
                    {u.followed
                        ? <button disabled={props.isFollowing.some(el=>el === u.id)} onClick={() => {
                            props.toggleIsFollowing(true, u.id)
                            usersAPI.unfollowUser(u.id)
                                .then((data) => {
                                    if (data.resultCode === 0) {
                                        props.unfollow(u.id)
                                    }
                                    props.toggleIsFollowing(false, u.id)
                                })
                        }}>Unfollow</button>
                        : <button disabled={props.isFollowing.some(el=>el === u.id)} onClick={() => {
                            props.toggleIsFollowing(true, u.id)
                            usersAPI.followUser(u.id)
                                .then((data) => {
                                    if (data.resultCode === 0) {
                                        props.follow(u.id)
                                    }
                                    props.toggleIsFollowing(false, u.id)
                                })
                        }}>Follow</button>}
                </div>
                <div className={s.user_block}>
                    <div className={s.user_block_info}>
                        <div>{u.name}</div>
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

