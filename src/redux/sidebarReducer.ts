import {v1} from "uuid";
import {ActionTypes, sidebarTypePage,} from "./store";


let initialState ={
    friends: [
        {id: v1(), name: 'Alex', avatar: 'https://www.svgrepo.com/show/106358/avatar.svg'},
        {id: v1(), name: 'Mick', avatar: 'https://www.svgrepo.com/show/26325/avatar.svg'},
        {id: v1(), name: 'John', avatar: 'https://www.svgrepo.com/show/113472/avatar.svg'},
        {id: v1(), name: 'Max', avatar: 'https://www.svgrepo.com/show/113445/avatar.svg'},
        {id: v1(), name: 'Charles', avatar: 'https://www.svgrepo.com/show/63886/avatar.svg'},
        {id: v1(), name: 'Pierre', avatar: 'https://www.svgrepo.com/show/83466/avatar.svg'}
    ]
}

export const sidebarReducer = (state: sidebarTypePage = initialState, action: ActionTypes) => {
    switch (action.type) {
        default:
            return state
    }
}