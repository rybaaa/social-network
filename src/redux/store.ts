import {v1} from "uuid";
import {addPostAC, newTextCallbackAC, profileReducer} from "./profileReducer";
import {addMessageAC, dialogsReducer, newMessageTextAC} from "./dialogsReducer";

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

export type ActionTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof newTextCallbackAC>
    | ReturnType<typeof newMessageTextAC>
    | ReturnType<typeof addMessageAC>


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
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
        this._renderTree()
    }
}
export default store