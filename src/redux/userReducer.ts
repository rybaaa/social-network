import {v1} from "uuid";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

export type LocationType = {
    city: string
    country: string
}

export type UsersType = {
    id: string
    photoURL: string
    name: string
    status: string
    location: LocationType
    followed: boolean
}

export type UsersPageType = {
    users: UsersType[]
}

let initialState: UsersPageType = {
    users:[]
}

type ActionType = ReturnType<typeof followAC> | ReturnType<typeof unfollowAC> | ReturnType<typeof setUsersAC>


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
                users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}
export const followAC = (userID:string) => ({type: FOLLOW, userID} as const)
export const unfollowAC = (userID:string) => ({type: UNFOLLOW, userID} as const)
export const setUsersAC = (users:UsersType[]) => ({type:SET_USERS, users} as const)

