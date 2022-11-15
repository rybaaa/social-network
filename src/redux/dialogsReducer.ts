import {v1} from "uuid";

const ADD_MESSAGE = 'ADD-MESSAGE'
const NEW_MESSAGE_TEXT = 'NEW-MESSAGE-TEXT'

export type dialogsType = {
    id: string
    name: string
    avatar: string
}

export type messagesType = {
    id: string
    message: string
}

export type DialogsPageType = {
    newMessage: string
    dialogs: dialogsType[]
    messages: messagesType[]
}

type ActionType = ReturnType<typeof newMessageTextAC> | ReturnType<typeof addMessageAC>

let initialState: DialogsPageType = {
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

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionType):DialogsPageType => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state, messages:[...state.messages, {id: v1(), message: action.message}]
            }
        case NEW_MESSAGE_TEXT:
            return {...state, newMessage:action.newMessage}
        default:
            return state
    }
}
export const addMessageAC = (message: string) => ({type: ADD_MESSAGE, message} as const)
export const newMessageTextAC = (newMessage: string) => ({type: NEW_MESSAGE_TEXT, newMessage} as const)