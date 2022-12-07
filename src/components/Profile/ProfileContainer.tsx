import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import axios from "axios";
import {AppStoreType} from "../../redux/redux-store";
import {addPostAC, newTextCallbackAC, ProfilePageType, setUserProfileAC} from "../../redux/profileReducer";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {Profile} from "./Profile";


export class ProfileApi extends React.Component<ProfilePagePropsType>{
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2')
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }
    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}

type DispatchPropsType = {
    addPost: (post:string) => void
    newTextCallback:(newText: string) => void
    setUserProfile : (profile:any) => void
}

let mapStateToProps = (state: AppStoreType): ProfilePageType => {
    return {
        newText:state.profilePage.newText,
        posts:state.profilePage.posts,
        profile:state.profilePage.profile
    }
}
let dispatchToProps = (dispatch: Dispatch): DispatchPropsType => {
    return {
        addPost: (post:string) => {
            dispatch(addPostAC(post))
        },
        newTextCallback:(newText:string)=>{
            dispatch(newTextCallbackAC(newText))
        },
        setUserProfile: (profile:any)=> {
            dispatch(setUserProfileAC(profile))
        }
    }
}

type ProfilePagePropsType = ProfilePageType & DispatchPropsType

export const ProfileContainer = connect(mapStateToProps, dispatchToProps)(ProfileApi)