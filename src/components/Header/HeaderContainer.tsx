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
const settings = {
    withCredentials:true
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

