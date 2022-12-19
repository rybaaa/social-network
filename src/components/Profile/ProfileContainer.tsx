import React from "react";
import {AppStoreType} from "../../redux/redux-store";
import {getProfileTC,ProfilePageType,} from "../../redux/profileReducer";
import {connect} from "react-redux";
import {Profile} from "./Profile";
import {RouteComponentProps, withRouter} from "react-router-dom";

type DispatchPropsType = {
    getProfileTC: (userId: number) => void
}

type SecondaryProfilePagePropsType = ProfilePageType & DispatchPropsType

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
        return (
            <Profile {...this.props}/>
        )
    }
}

let mapStateToProps = (state: AppStoreType): ProfilePageType => {
    return {
        newText: state.profilePage.newText,
        posts: state.profilePage.posts,
        profile: state.profilePage.profile
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