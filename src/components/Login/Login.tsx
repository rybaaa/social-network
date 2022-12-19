import React from 'react';
import s from './Login.module.css'

export const Login = () => {
    return (
            <div className={s.wrapper}>
                <h1>LOGIN TO START</h1>
                <div className={s.form}>
                    <div>
                        <input className={s.input} placeholder={'Login'}/>
                    </div>
                    <div>
                        <input className={s.input} placeholder={'Password'}/>
                    </div>
                    <div>
                        <button className={s.btn}>
                            Login
                        </button>
                    </div>
                </div>
            </div>

    );
};

