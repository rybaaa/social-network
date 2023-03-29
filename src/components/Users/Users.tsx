import React, {ChangeEvent, memo} from 'react';
import s from './Users.module.css'
import avatar from '../../assets/img/avatar-svgrepo-com.svg'
import {UsersType} from "../../redux/userReducer";
import {Preloader} from "../common/Preloader/Preloader";
import {NavLink} from "react-router-dom";
import {Button, Pagination} from "@mui/material";

type UserPropsType = {
    totalUsers: number
    pageSize: number
    currentPage: number
    onPageChanged: (page: number) => void
    users: UsersType[]
    isFetching: boolean
    isFollowing: Array<number>
    setFollow: (id: number) => void
    setUnfollow: (id: number) => void
}

export const Users = memo((props: UserPropsType) => {
        let pagesCount = Math.ceil(props.totalUsers / props.pageSize);
        let pages = []
        for (let i = 1; i <= 10; i++) {
            pages.push(i)
        }
        const onChangePagination = (event: ChangeEvent<unknown>, newPage: number) => {
            props.onPageChanged(newPage)
        }
        return (
            <div className={s.wrapper}> {props.isFetching ? <Preloader/> : null}
                <div className={s.pages}><Pagination count={pagesCount} page={props.currentPage}
                                                     onChange={onChangePagination} variant="outlined"
                                                     shape="rounded" color={'secondary'}/>
                </div>
                <div className={s.wrapper__block}> {props.users.map(u => <div key={u.id} className={s.block}>
                    <div className={s.avatar_btn_block}>
                        <NavLink to={'/profile/' + u.id} activeClassName={s.activeLink}>
                            <img src={u.photos?.small === null ? avatar : u.photos.small} alt={'avatar'}/>
                        </NavLink>
                        {u.followed
                            ? <Button variant={'outlined'} disabled={props.isFollowing.some(el => el === u.id)}
                                      onClick={() => {
                                          props.setUnfollow(u.id)
                                      }} color="secondary">Unfollow</Button>
                            : <Button variant={'outlined'} disabled={props.isFollowing.some(el => el === u.id)}
                                      onClick={() => {
                                          props.setFollow(u.id)
                                      }} color="secondary">Follow</Button>}
                    </div>
                    <div className={s.user_block}>
                        <div className={s.user_block_info}>
                            <div>{u.name}</div>
                        </div>
                        <div>
                            <div className={s.status}>Status:{u.status}</div>
                        </div>
                    </div>
                </div>)}
                </div>
                <div className={s.pagesDown}><Pagination count={pagesCount} page={props.currentPage}
                                                         onChange={onChangePagination} variant="outlined"
                                                         shape="rounded" color={'secondary'}/>
                </div>
                {props.isFetching ? <Preloader/> : null}
            </div>
        )
    }
)

