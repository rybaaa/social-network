import {authTC} from "./authReducer";
import {AppDispatchType} from "./redux-store";

const SET_ERROR = 'SET_ERROR'
const INITIALIZE = 'INITIALIZE'

export type InitialStateType = {
    error: string | null
    isInitialized: boolean
}

const initialState: InitialStateType = {
    error: null,
    isInitialized: false
}

export const appReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case SET_ERROR:
            return {...state, error: action.error}
        case INITIALIZE:
            return {...state, isInitialized: true}
        default:
            return {...state}
    }
}

export const setAppErrorAC = (error: string | null) => ({type: SET_ERROR, error} as const)
export const initializeAC = () => ({type: INITIALIZE} as const)

export type SetAppErrorActionType = ReturnType<typeof setAppErrorAC>
export type InitializeAppActionType = ReturnType<typeof initializeAC>

export type AppActionsType =
    | SetAppErrorActionType
    | InitializeAppActionType

export const initializeTC = () => {
    return (dispatch: AppDispatchType) => {
        dispatch(authTC())
            .then(()=>{
                dispatch(initializeAC())
            })
    }
}
