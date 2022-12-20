import React from "react";
import {AppStoreType} from "../../redux/redux-store";
import {getProfileTC, postType, ProfileType,} from "../../redux/profileReducer";
import {connect} from "react-redux";
import {Profile} from "./Profile";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type DispatchPropsType = {
    getProfileTC: (userId: number) => void
}

type MapStateToPropsType = {
    newText: string
    posts: postType[]
    profile: ProfileType
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
    }
}

export default compose<React.ComponentType>(
    WithAuthRedirect,
    connect(mapStateToProps, {getProfileTC}),
    withRouter
)(ProfileContainer);
