import React from 'react';
import {UsersPagePropsType} from "./UsersContainer";
import s from './Users.module.css'
import avatar from '../../assets/img/avatar-svgrepo-com.svg'
import axios from "axios";

export class Users extends React.Component <UsersPagePropsType> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <div>
                {this.props.users.map(u => <div key={u.id} className={s.block}>
                    <div className={s.avatar_btn_block}>
                        <img src={u.photos?.small === null ? avatar : u.photos.small}/>
                        {u.followed
                            ? <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                this.props.follow(u.id)
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
    }
};

