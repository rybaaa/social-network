const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const CHANGE_PAGE = 'CHANGE-PAGE'
const SET_TOTAL_USERS = 'SET-TOTAL-USERS'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS'

export type LocationType = {
    city: string
    country: string
}

type PhotosType = {
    small: string | null
    large: string | null
}

export type UsersType = {
    id: number
    photos: PhotosType
    name: string
    status: string
    location: LocationType
    followed: boolean
}

export type UsersPageType = {
    users: UsersType[]
    pageSize: number
    totalUsers: number,
    currentPage: number
    isFetching: boolean,
    followingInProgress: Array<number>
}

let initialState: UsersPageType = {
    users: [],
    pageSize: 50,
    totalUsers: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

type ActionType = ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof changePage>
    | ReturnType<typeof setTotalUsers>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleIsFollowingInProgress>


export const userReducer = (state: UsersPageType = initialState, action: ActionType): UsersPageType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userID ? {...u, followed: true} : u)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userID ? {...u, followed: false} : u)
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case CHANGE_PAGE:
            return {
                ...state,
                currentPage: action.page
            }
        case SET_TOTAL_USERS:
            return {
                ...state, totalUsers: action.count
            }
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFollowing
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}
export const follow = (userID: number) => ({type: FOLLOW, userID} as const)
export const unfollow = (userID: number) => ({type: UNFOLLOW, userID} as const)
export const setUsers = (users: UsersType[]) => ({type: SET_USERS, users} as const)
export const changePage = (page: number) => ({type: CHANGE_PAGE, page} as const)
export const setTotalUsers = (count: number) => ({type: SET_TOTAL_USERS, count} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)
export const toggleIsFollowingInProgress = (isFollowing: boolean, userId: number) => ({
    type: FOLLOWING_IN_PROGRESS,
    isFollowing,
    userId
} as const)

