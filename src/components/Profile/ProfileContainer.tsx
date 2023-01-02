import React from "react";
import {AppStoreType} from "../../redux/redux-store";
import {getProfileTC, postType, ProfileType, setStatusTC, updateStatusTC,} from "../../redux/profileReducer";
import {connect} from "react-redux";
import {Profile} from "./Profile";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type DispatchPropsType = {
    getProfileTC: (userId: number) => void
    setStatusTC: (userId: number) => void
    updateStatusTC: (status: string) => void
}

type MapStateToPropsType = {
    posts: postType[]
    profile: ProfileType
    status: string
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
        this.props.setStatusTC(+userId)
    }

    render() {
        return (
            <Profile {...this.props} updateStatus={this.props.updateStatusTC} isAuth={this.props.isAuth}/>
        )
    }
}

let mapStateToProps = (state: AppStoreType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        isAuth:state.auth.isAuth
    }
}

export default compose<React.ComponentType>(
    //WithAuthRedirect,
    connect(mapStateToProps, {
        getProfileTC,
        setStatusTC,
        updateStatusTC
    }),
    withRouter
)(ProfileContainer);
