import {ActionTypes, MessagesPageType, ProfilePageType} from "./state";
import {v1} from "uuid";

const ADD_MESSAGE = 'ADD-MESSAGE'
const NEW_MESSAGE_TEXT = 'NEW-MESSAGE-TEXT'

export const dialogsReducer = (state: MessagesPageType, action: ActionTypes) => {
    switch (action.type) {
        case ADD_MESSAGE:
            state.messages.push(
                {id: v1(), message: action.message}
            )
            return state
        case NEW_MESSAGE_TEXT:
            state.newMessage = action.newMessage
            return state
        default:
            return state
    }
}
export const addMessageAC = (message: string) => ({type: ADD_MESSAGE, message} as const)
export const newMessageTextAC = (newMessage: string) => ({type: NEW_MESSAGE_TEXT, newMessage} as const)