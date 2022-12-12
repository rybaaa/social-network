import React from "react";
import {Header} from "./Header";
import {setUserData, UserDataType} from "../../redux/authReducer";
import {connect} from "react-redux";
import {AppStoreType} from "../../redux/redux-store";
import {usersAPI} from "../../api/api";


type MapStateToPropsType = {
    login: string
    isAuth:boolean
}
type MapDispatchToPropsType = {
    setUserData: (data: UserDataType) => void
}
type AuthType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<AuthType> {
    componentDidMount() {
        usersAPI.authMe()
            .then(data => {
                if (data.resultCode===0){
                    this.props.setUserData(data.data)
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

