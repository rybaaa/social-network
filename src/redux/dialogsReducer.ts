import {v1} from "uuid";

const ADD_MESSAGE = 'ADD-MESSAGE'

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
    dialogs: dialogsType[]
    messages: messagesType[]
}

export type DialogsActionType = | ReturnType<typeof addMessageAC>

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
    ]
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: DialogsActionType):DialogsPageType => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state, messages:[...state.messages, {id: v1(), message: action.message}]
            }
        default:
            return state
    }
}
export const addMessageAC = (message: string) => ({type: ADD_MESSAGE, message} as const)