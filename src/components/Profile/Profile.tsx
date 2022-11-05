import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {AppStoreType} from "../../redux/redux-store";


type StatePostType = {
    store:AppStoreType
}

export const Profile = (props: StatePostType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                store={props.store}
            />
        </div>
    )
}