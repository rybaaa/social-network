import {ActionTypes, ProfilePageType} from "./state";
import {v1} from "uuid";

const ADD_POST = 'ADD-POST'
const NEW_TEXT_CALLBACK = 'NEW-TEXT-CALLBACK'

export const profileReducer = (state: ProfilePageType, action: ActionTypes) => {
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

