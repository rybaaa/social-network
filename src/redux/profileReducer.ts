import {v1} from "uuid";
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST'
const NEW_POST_UPDATE_TEXT = 'NEW-POST-UPDATE-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const UPDATE_STATUS = 'UPDATE_STATUS'

export type postType = {
    id: string
    post: string
    likes: number
}

type PhotoType = {
    small: string
    large: string
}

type ContactType = {
    facebook: string
    github: string
    instagram: string
    twitter: string
    vk: string
    website: string
    youtube: string
}

export type ProfileType = {
    photos: PhotoType
    fullName: string
    id: number,
    contacts: ContactType
    lookingForAJob: boolean
    lookingForAJobDescription: string
}

export type ProfilePageType = {
    newText: string
    posts: postType[]
    profile: ProfileType
    status: string
}

let initialState: ProfilePageType = {
    newText: 'Hey',
    posts: [
        {id: v1(), post: 'Today is my birthday', likes: 3},
        {id: v1(), post: 'My first post', likes: 22}
    ],
    profile: {
        photos: {small: '', large: ''},
        id: 0,
        fullName: '',
        contacts: {facebook: '', github: '', instagram: '', vk: '', twitter: '', website: '', youtube: ''},
        lookingForAJob: true,
        lookingForAJobDescription: ''
    },
    status: ''
}

type ActionType = ReturnType<typeof addPostAC> | ReturnType<typeof newTextCallbackAC> |
    ReturnType<typeof setUserProfileAC>
    | ReturnType<typeof setStatusAC>


export const profileReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            return {...state, posts: [...state.posts, {id: v1(), post: action.post, likes: 0}]}
        case NEW_POST_UPDATE_TEXT:
            return {...state, newText: action.newText}
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {...state, status:action.status}
        default:
            return state
    }
}
export const addPostAC = (post: string) => ({type: ADD_POST, post} as const)
export const newTextCallbackAC = (newText: string) => ({type: NEW_POST_UPDATE_TEXT, newText} as const)
export const setUserProfileAC = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile} as const)
export const setStatusAC = (status: string) => ({type: SET_STATUS, status} as const)

export const getProfileTC = (id: number) => {
    return (dispatch: Dispatch) => {
        profileAPI.getProfile(id)
            .then(res => {
                dispatch(setUserProfileAC(res))
            })
    }
}
export const setStatusTC = (id: number) => {
    return (dispatch: Dispatch) => {
        profileAPI.setStatus(id)
            .then(data => {
                dispatch(setStatusAC(data))
            })
    }
}
export const updateStatusTC = (status:string) => {
    console.log(status)
    return (dispatch: Dispatch) => {
        profileAPI.updateStatus(status)
            .then(data => {
                dispatch(setStatusAC(status))
            })
    }
}