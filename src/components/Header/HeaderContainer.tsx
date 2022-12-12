import React from "react";
import {Header} from "./Header";
import {setUserData, UserDataType} from "../../redux/authReducer";
import axios from "axios";
import {connect} from "react-redux";
import {AppStoreType} from "../../redux/redux-store";

type MapStateToPropsType = {
    login: string
    isAuth:boolean
}
type MapDispatchToPropsType = {
    setUserData: (data: UserDataType) => void
}
type AuthType = MapStateToPropsType & MapDispatchToPropsType
export const settings = {
    withCredentials:true,
    headers: {
        'API-KEY': '7fd04dfe-8629-4bd4-9c12-9366ee505d1c'
    }
}

class HeaderContainer extends React.Component<AuthType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, settings)
            .then(response => {
                if (response.data.resultCode===0){
                    this.props.setUserData(response.data.data)
                }
            })
    }

    render() {
        return <Header {...this.props}/>;
    }
}

let mapStateToProps = (state: AppStoreType): MapStateToPropsType => {
    return {
        login:state.auth.login,
        isAuth:state.auth.isAuth
    }
}

export default connect(mapStateToProps, {setUserData})(HeaderContainer)

