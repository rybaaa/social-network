import {v1} from "uuid";

const ADD_POST = 'ADD-POST'
const NEW_POST_UPDATE_TEXT = 'NEW-POST-UPDATE-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

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
    facebook:string
    github:string
    instagram:string
    twitter:string
    vk:string
    website:string
    youtube:string
}

type ProfileType = {
    photos: PhotoType
    aboutMe: string
    fullName: string
    id: number,
    contacts: ContactType
    lookingForAJob:boolean
    lookingForAJobDescription:string
}

export type ProfilePageType = {
    newText: string
    posts: postType[]
    profile: ProfileType
}

let initialState: ProfilePageType = {
    newText: 'Hey',
    posts: [
        {id: v1(), post: 'Today is my birthday', likes: 3},
        {id: v1(), post: 'My first post', likes: 22}
    ],
    profile: {photos: {small: '', large: ''},
        aboutMe: '',
        id: 0,
        fullName: '',
        contacts: {facebook:'', github:'', instagram:'', vk:'', twitter: '', website: '', youtube: ''},
        lookingForAJob:true,
        lookingForAJobDescription:''
    }
}

type ActionType = ReturnType<typeof addPostAC> | ReturnType<typeof newTextCallbackAC> |
    ReturnType<typeof setUserProfileAC>


export const profileReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            return {...state, posts: [...state.posts, {id: v1(), post: action.post, likes: 0}]}
        case NEW_POST_UPDATE_TEXT:
            return {...state, newText: action.newText}
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        default:
            return state
    }
}
export const addPostAC = (post: string) => ({type: ADD_POST, post} as const)
export const newTextCallbackAC = (newText: string) => ({type: NEW_POST_UPDATE_TEXT, newText} as const)
export const setUserProfileAC = (profile: any) => ({type: SET_USER_PROFILE, profile} as const)
