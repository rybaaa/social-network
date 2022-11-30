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
    setTotalUsers: (count:number) => void
}

export type UsersPagePropsType = MapStateToPropsType & DispatchToPropsType

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
        setTotalUsers: (count:number) => {
            dispatch(setTotalUsers(count))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, dispatchToProps)(Users)

