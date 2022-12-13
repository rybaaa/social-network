import React from "react";
import {Header} from "./Header";
import {setAvatar, setUserData, UserDataType} from "../../redux/authReducer";
import {connect} from "react-redux";
import {AppStoreType} from "../../redux/redux-store";
import {usersAPI} from "../../api/api";
import avatar from '../../assets/img/avatar-svgrepo-com.svg'

type MapStateToPropsType = {
    id: number | null
    login: string
    isAuth: boolean
    avatar:string
}
type MapDispatchToPropsType = {
    setUserData: (data: UserDataType) => void
    setAvatar: (avatar: string) => void
}
type AuthType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<AuthType> {
    componentDidMount() {
        usersAPI.authMe()
            .then(data => {
                if (data.resultCode === 0) {
                    this.props.setUserData(data.data)
                }
                return usersAPI.getProfile(data.data.id)
            })
            .then(data => {
                this.props.setAvatar(data.photos.small === null
                    ? avatar
                    : data.photos.small)
            })

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
        avatar:state.auth.avatar
    }
}

export default connect(mapStateToProps, {setUserData, setAvatar})(HeaderContainer)

