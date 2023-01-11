import {applyMiddleware, combineReducers, createStore} from "redux";
import {ProfileActionType, profileReducer} from "./profileReducer";
import {DialogsActionType, dialogsReducer} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";
import {UserActionType, userReducer} from "./userReducer";
import {AuthActionType, authReducer} from "./authReducer";
import thunk, {ThunkDispatch} from "redux-thunk"
import {AppActionsType, appReducer} from "./appReducer";
import {useDispatch} from "react-redux";

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

export type ActionDispatchType = AppActionsType | AuthActionType | ProfileActionType
    | UserActionType | DialogsActionType

export type AppDispatchType = ThunkDispatch<AppStoreType, any, ActionDispatchType>
export const useAppDispatch: () => AppDispatchType = useDispatch

export default store
