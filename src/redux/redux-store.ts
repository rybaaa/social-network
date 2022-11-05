import {combineReducers, createStore} from "redux";
import {newTextCallbackAC, profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";

let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    sidebar:sidebarReducer
})

let store = createStore(reducers);

export type AppStoreType = typeof store

export default store
