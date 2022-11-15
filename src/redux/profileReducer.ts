import {v1} from "uuid";
import {ActionTypes} from "./store";

const ADD_POST = 'ADD-POST'
const NEW_TEXT_CALLBACK = 'NEW-TEXT-CALLBACK'

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


export const profileReducer = (state: ProfilePageType = initialState, action: ActionTypes): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            /*state.posts.push(
                {id: v1(), post: action.post, likes: 0}
            )*/
            return {...state, posts: [...state.posts, {id: v1(), post: action.post, likes: 0}]}
        case NEW_TEXT_CALLBACK:
            //state.newText = action.newText
            return {...state, newText: action.newText}
        default:
            return state
    }
}
export const addPostAC = (post: string) => ({type: ADD_POST, post} as const)
export const newTextCallbackAC = (newText: string) => ({type: NEW_TEXT_CALLBACK, newText} as const)

