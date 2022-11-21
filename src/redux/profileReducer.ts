import {v1} from "uuid";

const ADD_POST = 'ADD-POST'
const NEW_POST_UPDATE_TEXT = 'NEW-POST-UPDATE-TEXT'

export type postType = {
    id: string
    post: string
    likes: number
}

export type ProfilePageType = {
    newText: string
    posts: postType[]
}

let initialState: ProfilePageType = {
    newText: 'Hey',
    posts: [
        {id: v1(), post: 'Today is my birthday', likes: 3},
        {id: v1(), post: 'My first post', likes: 22}
    ]
}

type ActionType = ReturnType<typeof addPostAC> | ReturnType<typeof newTextCallbackAC>


export const profileReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            return {...state, posts: [...state.posts, {id: v1(), post: action.post, likes: 0}]}
        case NEW_POST_UPDATE_TEXT:
            return {...state, newText: action.newText}
        default:
            return state
    }
}
export const addPostAC = (post: string) => ({type: ADD_POST, post} as const)
export const newTextCallbackAC = (newText: string) => ({type: NEW_POST_UPDATE_TEXT, newText} as const)

