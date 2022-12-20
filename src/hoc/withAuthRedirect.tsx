import React, {ComponentType} from 'react';
import {connect} from "react-redux";
import {AppStoreType} from "../redux/redux-store";
import {Redirect} from "react-router-dom";

type MapStateToPropsType = {
    isAuth: boolean
}
const mapStateToPropsType = (state: AppStoreType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function WithAuthRedirect<T>(Component: ComponentType<T>) {
    const RedirectComponent = (props: MapStateToPropsType) => {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to={'/login'}/>
        return <Component {...restProps as T}/>
    }
    return connect(mapStateToPropsType)(RedirectComponent)
};

