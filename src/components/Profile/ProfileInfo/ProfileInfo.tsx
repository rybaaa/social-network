import s from './ProfileInfo.module.css'
import React from "react";
import {Preloader} from "../../common/Preloader/Preloader";
import checked from '../../../assets/img/checkbox-checked-svgrepo-com.svg'
import unchecked from '../../../assets/img/unchecked-svgrepo-com.svg'
import avatar from '../../../assets/img/avatar-svgrepo-com.svg'
import {ProfilePagePropsType} from "../Profile";
import {ProfileStatus} from "./ProfileStatus";

export const ProfileInfo = (props: ProfilePagePropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={s.info}>
            <div className={s.info_main_block}>
                <h3>{props.profile.fullName}</h3>
                <img className={s.img_profile}
                     src={props.profile.photos.large == null ? avatar : props.profile.photos.large}
                     alt={'avatar'}></img>
                <span className={s.about}><ProfileStatus status={props.profile.aboutMe}/></span>
            </div>
            <div className={s.contact_info_block}>
                <h4>Contact Information:</h4>
                <ul>
                    <li>Facebook: {props.profile.contacts.facebook}</li>
                    <li>GitHub: {props.profile.contacts.github}</li>
                    <li>Instagram: {props.profile.contacts.instagram}</li>
                    <li>VK: {props.profile.contacts.vk}</li>
                    <li>Twitter: {props.profile.contacts.twitter}</li>
                    <li>Website: {props.profile.contacts.website}</li>
                    <li>YouTube: {props.profile.contacts.youtube}</li>
                </ul>
            </div>
            <div className={s.job}>
                <div className={s.job_checked}>Looking for a job: {props.profile.lookingForAJob ?
                    <img className={s.img} src={checked} alt={'logo true'}/> :
                    <img className={s.img} src={unchecked} alt={'logo false'}/>} </div>
                <div>My description: {props.profile.lookingForAJobDescription}</div>
            </div>


        </div>
    )
}