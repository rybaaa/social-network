import React from "react";
import {AppStoreType} from "../../redux/redux-store";
import {getProfileTC, postType, ProfileType, setStatusTC, updateStatusTC,} from "../../redux/profileReducer";
import {connect} from "react-redux";
import {Profile} from "./Profile";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {authTC} from "../../redux/authReducer";

type DispatchPropsType = {
    getProfileTC: (userId: number) => void
    setStatusTC: (userId: number) => void
    updateStatusTC: (status: string) => void
    authTC: () => void
}

type MapStateToPropsType = {
    posts: postType[]
    profile: ProfileType
    status: string
    isAuth: boolean
    authUserId:number | null
}

type SecondaryProfilePagePropsType = MapStateToPropsType & DispatchPropsType

type PathParamsType = {
    userId: string,
}

// Your component own properties
type PropsType = RouteComponentProps<PathParamsType> & SecondaryProfilePagePropsType


class ProfileContainer extends React.Component<PropsType> {
    showProfile(){
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = `${this.props.authUserId}`
            if(!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getProfileTC(+userId)
        this.props.setStatusTC(+userId)
    }
    componentDidMount() {
        this.showProfile()
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId){
            this.showProfile()
        }
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
        isAuth: state.auth.isAuth,
        authUserId:state.auth.id
    }
}

export default compose<React.ComponentType>(
    WithAuthRedirect,
    connect(mapStateToProps, {
        getProfileTC,
        setStatusTC,
        updateStatusTC,
        authTC
    }),
    withRouter
)(ProfileContainer);
