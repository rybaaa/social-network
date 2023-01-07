import React from "react";
import {Header} from "./Header";
import {authTC, logoutTC} from "../../redux/authReducer";
import {connect} from "react-redux";
import {AppStoreType} from "../../redux/redux-store";


type MapStateToPropsType = {
    id: number | null
    login: string
    isAuth: boolean
    avatar: string
}
type MapDispatchToPropsType = {
    authTC: () => void
    logoutTC: () => void
}
type AuthType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<AuthType> {
    componentDidMount() {
        this.props.authTC()
    }

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

export default connect(mapStateToProps, {authTC, logoutTC})(HeaderContainer)

