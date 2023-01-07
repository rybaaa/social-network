import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";
import {userReducer} from "./userReducer";
import {authReducer} from "./authReducer";
import thunk from "redux-thunk"
import {appReducer} from "./appReducer";

let reducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: userReducer,
    auth: authReducer,
    app: appReducer
})

let store = createStore(reducer, applyMiddleware(thunk));

// @ts-ignore
window.store = store

type RootReducerType = typeof reducer
export type AppStoreType = ReturnType<RootReducerType>

export default store
