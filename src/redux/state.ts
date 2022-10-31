import {v1} from "uuid";

export type postType = {
    id: string
    post: string
    likes: number
}

export type ProfilePageType = {
    newText: string
    posts: postType[]
}

export type dialogsType = {
    id: string
    name: string
    avatar: string
}

export type messagesType = {
    id: string
    message: string
}

export type MessagesPageType = {
    newMessage: string
    dialogs: dialogsType[]
    messages: messagesType[]
}

export type friendsType = {
    id: string
    name: string
    avatar: string
}

export type sidebarTypePage = {
    friends: friendsType[]
}

export type RootStateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
    sidebarPage: sidebarTypePage
}

const ADD_POST = 'ADD-POST'
const ADD_MESSAGE = 'ADD-MESSAGE'
const NEW_TEXT_CALLBACK = 'NEW-TEXT-CALLBACK'
const NEW_MESSAGE_TEXT = 'NEW-MESSAGE-TEXT'

export const addPostAC = (post: string) => ({type: ADD_POST, post} as const)
export const newTextCallbackAC = (newText: string) => ({type: NEW_TEXT_CALLBACK, newText} as const)
export const addMessageAC = (message: string) => ({type: ADD_MESSAGE, message} as const)
export const newMessageTextAC = (newMessage: string) => ({type: NEW_MESSAGE_TEXT, newMessage} as const)


export type ActionTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof newTextCallbackAC>
    | ReturnType<typeof newMessageTextAC>


export type StoreType = {
    _state: RootStateType
    subscribe: (callback: () => void) => void
    _renderTree: () => void
    getState: () => RootStateType
    dispatch: (action: ActionTypes) => void
}

const store: StoreType = {
    _state: {
        profilePage: {
            newText: 'Hey',
            posts: [
                {id: v1(), post: 'Today is my birthday', likes: 3},
                {id: v1(), post: 'My first post', likes: 22}
            ]
        },
        messagesPage: {
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
        },
        sidebarPage: {
            friends: [
                {id: v1(), name: 'Alex', avatar: 'https://www.svgrepo.com/show/106358/avatar.svg'},
                {id: v1(), name: 'Mick', avatar: 'https://www.svgrepo.com/show/26325/avatar.svg'},
                {id: v1(), name: 'John', avatar: 'https://www.svgrepo.com/show/113472/avatar.svg'},
                {id: v1(), name: 'Max', avatar: 'https://www.svgrepo.com/show/113445/avatar.svg'},
                {id: v1(), name: 'Charles', avatar: 'https://www.svgrepo.com/show/63886/avatar.svg'},
                {id: v1(), name: 'Pierre', avatar: 'https://www.svgrepo.com/show/83466/avatar.svg'}
            ]
        }
    },
    _renderTree() {
        console.log('state changed')
    },
    subscribe(callback: () => void) {
        this._renderTree = callback
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            this._state.profilePage.posts.push(
                {id: v1(), post: action.post, likes: 0}
            )
            this._renderTree()
        } else if (action.type === ADD_MESSAGE) {
            this._state.messagesPage.messages.push(
                {id: v1(), message: action.message}
            )
            this._renderTree()
        } else if (action.type === NEW_TEXT_CALLBACK) {
            this._state.profilePage.newText = action.newText
            this._renderTree()
        } else if (action.type === NEW_MESSAGE_TEXT) {
            this._state.messagesPage.newMessage = action.newMessage
            this._renderTree()
        }
    }
}
export default store