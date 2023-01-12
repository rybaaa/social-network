import React, {ChangeEvent, useEffect, useState} from 'react';
import {TextField} from "@mui/material";

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatus = (props: ProfileStatusType) => {
    const [status, setStatus] = useState(props.status)
    const [editMode, setEditMode] = useState(false)

    const activateEditModeOn = () => setEditMode(true)
    const activateEditModeOff = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const changeStatusHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setStatus(e.currentTarget.value)
    }
    const onEnterHandler = (e:any)=>{
        if(e.code==='Enter') activateEditModeOff()
    }
    useEffect(() => {
        setStatus(props.status)
    }, [props.status])
    return (
        editMode
            ?
            <div>
                <TextField id="status"
                           variant="standard"
                           autoFocus
                           value={status}
                           onChange={changeStatusHandler}
                           onBlur={activateEditModeOff}
                           onKeyDown={onEnterHandler}
                />
            </div>
            :
            <div>
                <span onDoubleClick={activateEditModeOn}>Status: {props.status || '_____'}</span>
            </div>
    );

};

