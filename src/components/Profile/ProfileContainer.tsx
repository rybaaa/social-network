import React from "react";
import {AppStoreType} from "../../redux/redux-store";
import {getProfileTC, postType, ProfileType,} from "../../redux/profileReducer";
import {connect} from "react-redux";
import {Profile} from "./Profile";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";

type DispatchPropsType = {
    getProfileTC: (userId: number) => void
}

type MapStateToPropsType = {
    newText: string
    posts: postType[]
    profile: ProfileType
    isAuth:boolean
}

type SecondaryProfilePagePropsType = MapStateToPropsType & DispatchPropsType

type PathParamsType = {
    userId: string,
}

// Your component own properties
type PropsType = RouteComponentProps<PathParamsType> & SecondaryProfilePagePropsType


class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '26681'
        }
        this.props.getProfileTC(+userId)
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={'/login'}/>
        return (
            <Profile {...this.props}/>
        )
    }
}

let mapStateToProps = (state: AppStoreType): MapStateToPropsType => {
    return {
        newText: state.profilePage.newText,
        posts: state.profilePage.posts,
        profile: state.profilePage.profile,
        isAuth:state.auth.isAuth
    }
}
// let dispatchToProps = (dispatch: Dispatch): DispatchPropsType => {
//     return {
//         addPost: (post:string) => {
//             dispatch(addPostAC(post))
//         },
//         newTextCallback:(newText:string)=>{
//             dispatch(newTextCallbackAC(newText))
//         },
//         setUserProfile: (profile:any)=> {
//             dispatch(setUserProfileAC(profile))
//         }
//     }
// }


export default connect(mapStateToProps, {getProfileTC})(withRouter(ProfileContainer))