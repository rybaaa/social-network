import {AppStoreType} from "./redux-store";

export const getUsers = (state:AppStoreType) => {
    return state.usersPage.users
}
export const getPagesize = (state:AppStoreType) => {
    return state.usersPage.pageSize
}
export const getTotalUsers = (state:AppStoreType) => {
    return state.usersPage.totalUsers
}
export const getCurrentPage = (state:AppStoreType) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state:AppStoreType) => {
    return state.usersPage.isFetching
}
export const getFollowingInProgress = (state:AppStoreType) => {
    return state.usersPage.followingInProgress
}