import React from "react";
import {Header} from "./Header";
import {logoutTC} from "../../redux/authReducer";
import {connect} from "react-redux";
import {AppStoreType} from "../../redux/redux-store";


type MapStateToPropsType = {
    id: number | null
    login: string
    isAuth: boolean
    avatar: string
}
type MapDispatchToPropsType = {
    logoutTC: () => void
}
type AuthType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<AuthType> {
    render() {
        return <Header {...this.props} logout={this.props.logoutTC}/>;
    }
}

let mapStateToProps = (state: AppStoreType): MapStateToPropsType => {
    return {
        id: state.auth.id,
        login: state.auth.login,
        isAuth: state.auth.isAuth,
        avatar: state.auth.avatar
    }
}

export default connect(mapStateToProps, {logoutTC})(HeaderContainer)

