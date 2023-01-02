import {Dispatch} from "redux";
import {FormikErrorType, profileAPI, usersAPI} from "../api/api";
import avatar from '../assets/img/avatar-svgrepo-com.svg'
const SET_USER_DATA = 'SET_USER_DATA'
const SET_AVATAR = 'SET_AVATAR'


type ActionType = ReturnType<typeof setUserData> | ReturnType<typeof setAvatar>

export type UserDataType = {
    id: null | number
    email: string
    login: string
    isAuth: boolean
    avatar: string
}
const initialState = {
    id: null,
    email: '',
    login: '',
    isAuth: false,
    avatar: ''
}


export const authReducer = (state: UserDataType = initialState, action: ActionType): UserDataType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case SET_AVATAR:
            return {
                ...state,
                avatar: action.avatar
            }

        default:
            return state
    }
}
export const setUserData = (data: UserDataType) => ({type: SET_USER_DATA, data} as const)
export const setAvatar = (avatar: string) => ({type: SET_AVATAR, avatar} as const)

export const authTC = () => {
    return (dispatch: Dispatch) => {
        usersAPI.authMe()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setUserData(data.data))
                }
                return profileAPI.getProfile(data.data.id)
            })
            .then(data => {
                dispatch(setAvatar(data.photos.small === null
                    ? avatar
                    : data.photos.small))
            })
    }
}

export const loginTC =(values:FormikErrorType) => {
    usersAPI.login(values)
        .then(res=>{
            return authTC()
        })
}
