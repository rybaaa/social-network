import {ActionTypes, MessagesPageType} from "./store";
import {v1} from "uuid";

const ADD_MESSAGE = 'ADD-MESSAGE'
const NEW_MESSAGE_TEXT = 'NEW-MESSAGE-TEXT'

let initialState = {
    dialogs: [
        {id: v1(), name: 'Mick', avatar: 'https://www.svgrepo.com/show/26325/avatar.svg'},
        {id: v1(), name: 'Alex', avatar: 'https://www.svgrepo.com/show/106358/avatar.svg'},
        {id: v1(), name: 'Max', avatar: 'https://www.svgrepo.com/show/113445/avatar.svg'},
        {id: v1(), name: 'Charles', avatar: 'https://www.svgrepo.com/show/63886/avatar.svg'}
    ],
    messages: [
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'What is your aim?'},
        {id: v1(), message: 'Good Luck!'},
        {id: v1(), message: 'Have fun'}
    ],
    newMessage: ''
}

export const dialogsReducer = (state: MessagesPageType = initialState, action: ActionTypes) => {
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