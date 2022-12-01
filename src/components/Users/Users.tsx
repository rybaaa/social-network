import React from 'react';
import {UsersPagePropsType} from "./UsersContainer";
import s from './Users.module.css'
import avatar from '../../assets/img/avatar-svgrepo-com.svg'
import axios from "axios";

export class Users extends React.Component <UsersPagePropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pagesize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsers(response.data.totalCount)
            })
    }
    onPageChanged = (page:number)=> {
        this.props.changePage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pagesize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }


    render() {
        let pagesCount = Math.ceil(this.props.totalUsers / this.props.pagesize);
        let pages = []
        for (let i =1; i<=10; i++) {
            pages.push(i)
        }
        return (
            <div>
                <div className={s.pages}>
                    {pages.map(p=><span key={p} onClick={()=> {this.onPageChanged(p)}} className={this.props.currentPage===p? s.selectedPage:s.page}>{p}</span>)}
                    {<span>...</span>}
                    {<span key={pagesCount} onClick={()=>{this.onPageChanged(pagesCount)}} className={this.props.currentPage===pagesCount? s.selectedPage:''}>{pagesCount}</span>}

                </div>
                <div> {this.props.users.map(u => <div key={u.id} className={s.block}>
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
            </div>

        );
    }
};

