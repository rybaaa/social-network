export type postType = {
    id:number
    post:string
    likes:number
}

export type ProfilePageType = {
    posts:postType[]
}

export type dialogsType = {
    id: number
    name: string
    avatar:string
}

export type messagesType = {
    id:number
    message:string
}

export type MessagesPageType = {
    dialogs:dialogsType[]
    messages: messagesType[]
}

export type friendsType = {
    id:number
    name: string
    avatar: string
}

export type sidebarTypePage = {
    friends:friendsType[]
}

export type RootStateType = {
    profilePage:ProfilePageType
    messagesPage:MessagesPageType
    sidebarPage:sidebarTypePage
}



let state: RootStateType = {
    profilePage: {
        posts:[
            {id:1, post: 'Today is my birthday', likes: 3},
            {id:2, post: 'My first post', likes: 22}
        ]
    },
    messagesPage: {
        dialogs: [
            {id: 1, name: 'Mick', avatar: 'https://www.svgrepo.com/show/26325/avatar.svg' },
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
            {id:1, name: 'Alex', avatar: 'https://www.svgrepo.com/show/106358/avatar.svg'},
            {id:2, name: 'Mick', avatar: 'https://www.svgrepo.com/show/26325/avatar.svg'},
            {id:3, name: 'John', avatar: 'https://www.svgrepo.com/show/113472/avatar.svg'},
            {id:4, name: 'Max', avatar: 'https://www.svgrepo.com/show/113445/avatar.svg'},
            {id:4, name: 'Charles', avatar: 'https://www.svgrepo.com/show/63886/avatar.svg'},
            {id:4, name: 'Pierre', avatar: 'https://www.svgrepo.com/show/83466/avatar.svg'}
        ]
    }
}


export default state