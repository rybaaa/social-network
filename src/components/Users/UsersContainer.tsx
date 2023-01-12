import React from 'react';
import {connect} from "react-redux";
import {AppStoreType} from "../../redux/redux-store";
import {
    changePage,
    getUsersTC, setFollowTC,
    setTotalUsers, setUnfollowTC,
    setUsers, toggleIsFetching,
    UsersType
} from "../../redux/userReducer";
import {Users} from "./Users";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPagesize,
    getTotalUsers,
    getUsers
} from "../../redux/users-selectors";

type MapStateToPropsType = {
    users: UsersType[]
    pagesize: number
    totalUsers: number
    currentPage: number
    isFetching:boolean
    followingInProgress: Array<number>
}
type DispatchToPropsType = {
    setUsers: (users: UsersType[]) => void
    changePage: (page: number) => void
    setTotalUsers: (count: number) => void
    toggleIsFetching: (isFetching:boolean) => void
    getUsersTC:(currentPage:number, pagesize:number)=>void
    setFollowTC:(id:number)=>void
    setUnfollowTC:(id:number)=>void
}

export type UsersPagePropsType = MapStateToPropsType & DispatchToPropsType

export class UsersAPI extends React.Component <UsersPagePropsType> {
    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pagesize)
    }

    onPageChanged = (page: number) => {
        this.props.getUsersTC(page, this.props.pagesize)
    }
    render() {
        return (
            <Users totalUsers={this.props.totalUsers}
                   pageSize={this.props.pagesize}
                   currentPage = {this.props.currentPage}
                   onPageChanged = {this.onPageChanged}
                   users = {this.props.users}
                   isFetching = {this.props.isFetching}
                   isFollowing = {this.props.followingInProgress}
                   setFollow = {this.props.setFollowTC}
                   setUnfollow = {this.props.setUnfollowTC}
            />
        )
    }
}

let mapStateToProps = (state: AppStoreType): MapStateToPropsType => {
    return {
        users: getUsers(state),
        pagesize: getPagesize(state),
        totalUsers: getTotalUsers(state),
        currentPage: getCurrentPage(state),
        isFetching:getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export const UsersContainer = connect(mapStateToProps, {
    setUsers,
    changePage,
    setTotalUsers,
    toggleIsFetching,
    getUsersTC,
    setFollowTC,
    setUnfollowTC
})(UsersAPI)

