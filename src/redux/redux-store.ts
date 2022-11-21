import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";
import {userReducer} from "./userReducer";

let reducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: userReducer
})

let store = createStore(reducer);

type RootReducerType = typeof reducer
export type AppStoreType = ReturnType<RootReducerType>

export default store
