import axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '7fd04dfe-8629-4bd4-9c12-9366ee505d1c'
    }
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
            .then((res) => {
                return res.data
            })
    },
    followUser(id: number) {
        return instance.post(`/follow/${id}`, {})
            .then((res) => {
                return res.data
            })
    },
    unfollowUser(id: number) {
        return instance.delete(`/follow/${id}`)
            .then((res) => {
                return res.data
            })
    },
    authMe() {
        return instance.get('auth/me')
            .then((res) => {
                return res.data
            })
    },
    login(values:FormikErrorType) {
        return instance.post('/auth/login', values)
    }

}

export const profileAPI = {
    getProfile(id:number|null){
        return instance.get(`/profile/${id}`)
            .then((res)=>{
                return res.data
            })
    },
    setStatus(id:number){
        return instance.get(`/profile/status/${id}`)
            .then(res=>{
                return res.data
            })
    },
    updateStatus(status:string){
        console.log(status)
        return instance.put('/profile/status', {status})
            .then(res=>{
                console.log(res)
                return res.data
            })
    }
}


export type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}
export type DataLoginType = {
    email:string
    password:string
    rememberMe:boolean
    captcha?:string
}