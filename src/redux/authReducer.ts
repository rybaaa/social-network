const SET_USER_DATA = 'SET_USER_DATA'



type ActionType = ReturnType<typeof setUserData>

export type UserDataType = {
    id:null | number
    email: string
    login: string
    isAuth: boolean
}
const initialState = {
    id:null,
    email:'',
    login:'',
    isAuth: false
}


export const authReducer = (state: UserDataType = initialState, action: ActionType): UserDataType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth:true
            }
        default:
            return state
    }
}
export const setUserData = (data:UserDataType) => ({type: SET_USER_DATA, data} as const)


