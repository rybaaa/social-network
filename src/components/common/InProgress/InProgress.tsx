import React from 'react';
import inProgress from "../../../assets/img/inprogress.jpg";
import s from '../InProgress/InProgress.module.css'

export const InProgress = () => {
    return (
        <div className={s.wrapper}>
            <img src={inProgress}/>
        </div>
    );
};
