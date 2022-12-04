import React from 'react';
import preloader from '../../../assets/img/three-dots.svg'
import s from './Preloader.module.css'

export const Preloader = () => {
    return (
        <div className={s.loader}>
            <img src={preloader}/>
        </div>
    );
};

