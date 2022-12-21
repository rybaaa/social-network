import React from 'react';
import {TextField} from "@mui/material";
import s from './ProfileInfo.module.css'

type ProfileStatusType = {
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusType> {
    state = {
        editMode: false
    }

    activateEditModeOn() {
        this.state.editMode = true
        this.setState({editMode: true})
    }

    activateEditModeOff() {
        this.state.editMode = false
        this.setState({editMode: false})
    }


    render() {
        return (
            this.state.editMode
                ?
                <div>
                    <TextField id="status" variant="standard"
                               autoFocus
                               value={this.props.status}
                               onBlur={this.activateEditModeOff.bind(this)}/>
                </div>
                :
                <div>
                    <span onDoubleClick={this.activateEditModeOn.bind(this)}>Status: {this.props.status}</span>
                </div>
        );
    }


};

