import React from "react";
import {AppStoreType} from "../../redux/redux-store";
import {addPostAC, newTextCallbackAC, ProfilePageType, ProfileType, setUserProfileAC} from "../../redux/profileReducer";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {Profile} from "./Profile";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";

type DispatchPropsType = {
    addPost: (post:string) => void
    newTextCallback:(newText: string) => void
    setUserProfile : (profile:ProfileType) => void
}

type SecondaryProfilePagePropsType = ProfilePageType & DispatchPropsType

type PathParamsType = {
    userId: string,
}

// Your component own properties
type PropsType = RouteComponentProps<PathParamsType> & SecondaryProfilePagePropsType


export class ProfileApi extends React.Component<PropsType>{
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId){
            userId = '26681'
        }
        usersAPI.getProfile(+userId)
            .then(response => {
                this.props.setUserProfile(response)
            })
    }
    render() {
        return (
            <Profile {...this.props}/>
        )
    }
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


export const ProfileContainer = connect(mapStateToProps, dispatchToProps)(withRouter(ProfileApi))