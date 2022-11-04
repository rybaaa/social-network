import React from "react";
import {MyPosts} from "./MyPosts/MyPost";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionTypes, ProfilePageType} from "../../redux/store";


type StatePostType = {
    newText:string
    state: ProfilePageType
    dispatch:(action:ActionTypes)=>void
}

export const Profile = (props: StatePostType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.state.posts}
                dispatch={props.dispatch}
                newText={props.state.newText}
            />
        </div>
    )
}