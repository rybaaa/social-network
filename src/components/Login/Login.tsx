import React from 'react';
import s from './Login.module.css'
import {Box, Button, TextField} from "@mui/material";
import VpnKeyIcon from '@mui/icons-material/VpnKey';

export const Login = () => {
    return (
        <div className={s.wrapper}>
            <h1>LOGIN TO START</h1>
            <div className={s.form}>
                <div>
                    <TextField
                        id='login'
                        label="Login"
                        defaultValue=''
                    />
                </div>
                <div>
                    <TextField
                        id='password'
                        label="Password"
                        defaultValue=''
                    />
                </div>
                <div>
                    <Button color={'info'} variant="contained" endIcon={<VpnKeyIcon/>}>
                        Login
                    </Button>
                </div>
            </div>
        </div>
    );
};

