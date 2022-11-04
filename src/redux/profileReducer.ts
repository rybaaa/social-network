import {ActionTypes, ProfilePageType} from "./store";
import {v1} from "uuid";

const ADD_POST = 'ADD-POST'
const NEW_TEXT_CALLBACK = 'NEW-TEXT-CALLBACK'

let initialState ={
    newText: 'Hey',
    posts: [
        {id: v1(), post: 'Today is my birthday', likes: 3},
        {id: v1(), post: 'My first post', likes: 22}
    ]
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case ADD_POST:
            state.posts.push(
                {id: v1(), post: action.post, likes: 0}
            )
            return state
        case NEW_TEXT_CALLBACK:
            state.newText = action.newText
            return state
        default:
            return state
    }
}
export const addPostAC = (post: string) => ({type: ADD_POST, post} as const)
export const newTextCallbackAC = (newText: string) => ({type: NEW_TEXT_CALLBACK, newText} as const)

