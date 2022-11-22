import React from 'react';
import {connect} from "react-redux";
import {AppStoreType} from "../../redux/redux-store";
import {followAC, setUsersAC, unfollowAC, UsersPageType, UsersType} from "../../redux/userReducer";
import {Dispatch} from "redux";
import {Users} from "./Users";

type MapStateToPropsType = {
    users: UsersType[]
}
type DispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: UsersType[]) => void
}

export type UsersPagePropsType = MapStateToPropsType & DispatchToPropsType

let mapStateToProps = (state: AppStoreType): MapStateToPropsType => {
    return {
        users: state.usersPage.users
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
        }
    }
}

export const UsersContainer = connect(mapStateToProps, dispatchToProps) (Users)

