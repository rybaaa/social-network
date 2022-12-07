import s from './ProfileInfo.module.css'
import React from "react";
import {ProfilePageType} from "../../../redux/profileReducer";
import {Preloader} from "../../common/Preloader/Preloader";
import checked from '../../../assets/img/checkbox-checked-svgrepo-com.svg'
import unchecked from '../../../assets/img/unchecked-svgrepo-com.svg'

export const ProfileInfo = (props: ProfilePageType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={s.info}>
            <div>
                <img className={s.img_profile} src={props.profile.photos.large}></img>
            </div>
            <div>
                <h3>{props.profile.fullName}</h3>
                <span className={s.about}>Status: {props.profile.aboutMe}</span>
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
                <div className={s.job_checked}>Looking for a job: {props.profile.lookingForAJob? <img src={checked}/>: <img src={unchecked}/>} </div>
                <div>My description: {props.profile.lookingForAJobDescription}</div>
            </div>
        </div>
    )
}