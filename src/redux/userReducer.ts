const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const CHANGE_PAGE = 'CHANGE-PAGE'
const SET_TOTAL_USERS = 'SET-TOTAL-USERS'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

export type LocationType = {
    city: string
    country: string
}

type PhotosType = {
    small:string | null
    large:string | null
}

export type UsersType = {
    id: number
    photos:PhotosType
    name: string
    status: string
    location: LocationType
    followed: boolean
}

export type UsersPageType = {
    users: UsersType[]
    pagesize:number
    totalUsers:number,
    currentPage:number
    isFetching:boolean
}

let initialState: UsersPageType = {
    users:[],
    pagesize:50,
    totalUsers:0,
    currentPage:1,
    isFetching:false
}

type ActionType = ReturnType<typeof followAC> | ReturnType<typeof unfollowAC> | ReturnType<typeof setUsersAC> |ReturnType<typeof changePageAC>
| ReturnType<typeof setTotalUsersAC> | ReturnType<typeof toggleIsFetchingAC>


export const userReducer = (state: UsersPageType = initialState, action: ActionType): UsersPageType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u=>u.id===action.userID? {...u, followed:true}: u)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u=>u.id===action.userID? {...u, followed:false}: u)
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case CHANGE_PAGE:
            return {
                ...state,
                currentPage:action.page
            }
        case SET_TOTAL_USERS:
            return {
                ...state, totalUsers:action.count
            }
        case "TOGGLE_IS_FETCHING":
            return {...state, isFetching:action.isFetching}
        default:
            return state
    }
}
export const followAC = (userID:number) => ({type: FOLLOW, userID} as const)
export const unfollowAC = (userID:number) => ({type: UNFOLLOW, userID} as const)
export const setUsersAC = (users:UsersType[]) => ({type:SET_USERS, users} as const)
export const changePageAC = (page:number) => ({type:CHANGE_PAGE, page} as const)
export const setTotalUsersAC = (count:number) => ({type:SET_TOTAL_USERS, count} as const)
export const toggleIsFetchingAC = (isFetching:boolean) => ({type:TOGGLE_IS_FETCHING, isFetching} as const)

