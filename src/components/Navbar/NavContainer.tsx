import React from "react";
import {friendsType} from "../../redux/sidebarReducer";
import {AppStoreType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {Nav} from "./Nav";

type MapStateToPropsType = {
    friends: friendsType[]
}
const MapStateToProps = (state: AppStoreType):MapStateToPropsType => {
    return {
        friends: state.sidebar.friends
    }
}
export const NavContainer =  connect(MapStateToProps)(Nav)
