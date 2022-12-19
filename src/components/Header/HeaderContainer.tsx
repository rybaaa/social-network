import React from "react";
import {Header} from "./Header";
import {authTC, setAvatar, setUserData, UserDataType} from "../../redux/authReducer";
import {connect} from "react-redux";
import {AppStoreType} from "../../redux/redux-store";


type MapStateToPropsType = {
    id: number | null
    login: string
    isAuth: boolean
    avatar: string
}
type MapDispatchToPropsType = {
    setUserData: (data: UserDataType) => void
    setAvatar: (avatar: string) => void
    authTC: () => void
}
type AuthType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<AuthType> {
    componentDidMount() {
        this.props.authTC()
    }

    render() {
        return <Header {...this.props}/>;
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

export default connect(mapStateToProps, {setUserData, setAvatar, authTC})(HeaderContainer)

