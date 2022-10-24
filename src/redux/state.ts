export type postType = {
    id: number
    post: string
    likes: number
}

export type ProfilePageType = {
    newText: string
    posts: postType[]
}

export type dialogsType = {
    id: number
    name: string
    avatar: string
}

export type messagesType = {
    id: number
    message: string
}

export type MessagesPageType = {
    dialogs: dialogsType[]
    messages: messagesType[]
}

export type friendsType = {
    id: number
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

export type StoreType = {
    _state: RootStateType
    addPost: (post: string) => void
    addMessage: (message: string) => void
    newTextCallback: (newtext: string) => void
    subscribe: (callback: () => void) => void
    _renderTree:()=>void
    getState:()=>RootStateType
}

const store: StoreType = {
    _state: {
        profilePage: {
            newText: 'Hey',
            posts: [
                {id: 1, post: 'Today is my birthday', likes: 3},
                {id: 2, post: 'My first post', likes: 22}
            ]
        },
        messagesPage: {
            dialogs: [
                {id: 1, name: 'Mick', avatar: 'https://www.svgrepo.com/show/26325/avatar.svg'},
                {id: 2, name: 'Alex', avatar: 'https://www.svgrepo.com/show/106358/avatar.svg'},
                {id: 3, name: 'Max', avatar: 'https://www.svgrepo.com/show/113445/avatar.svg'},
                {id: 4, name: 'Charles', avatar: 'https://www.svgrepo.com/show/63886/avatar.svg'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'What is your aim?'},
                {id: 3, message: 'Good Luck!'},
                {id: 4, message: 'Have fun'}
            ]
        },
        sidebarPage: {
            friends: [
                {id: 1, name: 'Alex', avatar: 'https://www.svgrepo.com/show/106358/avatar.svg'},
                {id: 2, name: 'Mick', avatar: 'https://www.svgrepo.com/show/26325/avatar.svg'},
                {id: 3, name: 'John', avatar: 'https://www.svgrepo.com/show/113472/avatar.svg'},
                {id: 4, name: 'Max', avatar: 'https://www.svgrepo.com/show/113445/avatar.svg'},
                {id: 4, name: 'Charles', avatar: 'https://www.svgrepo.com/show/63886/avatar.svg'},
                {id: 4, name: 'Pierre', avatar: 'https://www.svgrepo.com/show/83466/avatar.svg'}
            ]
        }
    },
    addPost(post: string) {
        this._state.profilePage.posts.push(
            {id: 3, post: post, likes: 0}
        )
        this._renderTree()
    },
    addMessage(message: string) {
        this._state.messagesPage.messages.push(
            {id: 5, message: message}
        )
        this._renderTree()
    },
    newTextCallback(newtext: string) {
        this._state.profilePage.newText = newtext
        this._renderTree()
    },
    subscribe(callback: () => void) {
        this._renderTree = callback
    },
    _renderTree() {
        console.log('state changed')
    },
    getState() {
        return this._state
    }
}
export default store