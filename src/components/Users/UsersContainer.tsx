import React from 'react';
import {connect} from "react-redux";
import {AppStoreType} from "../../redux/redux-store";
import {
    changePage,
    follow,
    setTotalUsers,
    setUsers, toggleIsFetching,
    unfollow,
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
    isFetching:boolean
}
type DispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: UsersType[]) => void
    changePage: (page: number) => void
    setTotalUsers: (count: number) => void
    toggleIsFetching: (isFetching:boolean) => void
}

export type UsersPagePropsType = MapStateToPropsType & DispatchToPropsType

export class UsersAPI extends React.Component <UsersPagePropsType> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pagesize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsers(response.data.totalCount)
            })
    }

    onPageChanged = (page: number) => {
        this.props.toggleIsFetching(true)
        this.props.changePage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pagesize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
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
                   isFetching = {this.props.isFetching}
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
        currentPage: state.usersPage.currentPage,
        isFetching:state.usersPage.isFetching
    }
}

// let dispatchToProps = (dispatch: Dispatch): DispatchToPropsType => {
//     return {
//         follow: (userID: number) => {
//             dispatch(follow(userID))
//         },
//         unfollow: (userID: number) => {
//             dispatch(unfollow(userID))
//         },
//         setUsers: (users) => {
//             dispatch(setUsers(users))
//         },
//         changePage: (page: number) => {
//             dispatch(changePage(page))
//         },
//         setTotalUsers: (count: number) => {
//             dispatch(setTotalUsers(count))
//         },
//         toggleIsFetching: (isFetching:boolean)=> {
//             dispatch(toggleIsFetching(isFetching))
//         }
//     }
// }

export const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    changePage,
    setTotalUsers,
    toggleIsFetching
})(UsersAPI)

