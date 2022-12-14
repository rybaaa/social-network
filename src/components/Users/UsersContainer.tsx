import React from 'react';
import {connect} from "react-redux";
import {AppStoreType} from "../../redux/redux-store";
import {
    changePage,
    follow, getUsersThuncCreator,
    setTotalUsers,
    setUsers, toggleIsFetching, toggleIsFollowingInProgress,
    unfollow,
    UsersType
} from "../../redux/userReducer";
import {Users} from "./Users";

type MapStateToPropsType = {
    users: UsersType[]
    pagesize: number
    totalUsers: number
    currentPage: number
    isFetching:boolean
    followingInProgress: Array<number>
}
type DispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: UsersType[]) => void
    changePage: (page: number) => void
    setTotalUsers: (count: number) => void
    toggleIsFetching: (isFetching:boolean) => void
    toggleIsFollowingInProgress:(isFollowing:boolean, userId:number) => void
    getUsers:(currentPage:number, pagesize:number)=>void
}

export type UsersPagePropsType = MapStateToPropsType & DispatchToPropsType

export class UsersAPI extends React.Component <UsersPagePropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pagesize)
    }

    onPageChanged = (page: number) => {
        this.props.getUsers(page, this.props.pagesize)
    }
    render() {
        return (
            <Users totalUsers={this.props.totalUsers}
                   pageSize={this.props.pagesize}
                   currentPage = {this.props.currentPage}
                   onPageChanged = {this.onPageChanged}
                   follow = {this.props.follow}
                   unfollow = {this.props.unfollow}
                   users = {this.props.users}
                   isFetching = {this.props.isFetching}
                   isFollowing = {this.props.followingInProgress}
                   toggleIsFollowing = {this.props.toggleIsFollowingInProgress}
            />
        )
    }
}
;

let mapStateToProps = (state: AppStoreType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pagesize: state.usersPage.pageSize,
        totalUsers: state.usersPage.totalUsers,
        currentPage: state.usersPage.currentPage,
        isFetching:state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
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
    toggleIsFetching,
    toggleIsFollowingInProgress,
    getUsers:getUsersThuncCreator
})(UsersAPI)

