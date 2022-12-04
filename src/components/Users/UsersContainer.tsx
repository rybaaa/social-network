import React from 'react';
import {connect} from "react-redux";
import {AppStoreType} from "../../redux/redux-store";
import {
    changePageAC,
    followAC,
    setTotalUsers,
    setUsersAC,
    unfollowAC,
    UsersType
} from "../../redux/userReducer";
import {Dispatch} from "redux";
import {Users} from "./Users";
import axios from "axios";

type MapStateToPropsType = {
    users: UsersType[]
    pagesize: number
    totalUsers: number
    currentPage: number
}
type DispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: UsersType[]) => void
    changePage: (page: number) => void
    setTotalUsers: (count: number) => void
}

export type UsersPagePropsType = MapStateToPropsType & DispatchToPropsType

export class UsersAPI extends React.Component <UsersPagePropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pagesize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsers(response.data.totalCount)
            })
    }

    onPageChanged = (page: number) => {
        this.props.changePage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pagesize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }


    render() {
        return (
            <Users totalUsers={this.props.totalUsers}
                   pagesize={this.props.pagesize}
                   currentPage = {this.props.currentPage}
                   onPageChanged = {this.onPageChanged}
                   follow = {this.props.follow}
                   unfollow = {this.props.unfollow}
                   users = {this.props.users}
            />
        )
    }
}
;

let mapStateToProps = (state: AppStoreType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pagesize: state.usersPage.pagesize,
        totalUsers: state.usersPage.totalUsers,
        currentPage: state.usersPage.currentPage
    }
}

let dispatchToProps = (dispatch: Dispatch): DispatchToPropsType => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: number) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        changePage: (page: number) => {
            dispatch(changePageAC(page))
        },
        setTotalUsers: (count: number) => {
            dispatch(setTotalUsers(count))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, dispatchToProps)(UsersAPI)

