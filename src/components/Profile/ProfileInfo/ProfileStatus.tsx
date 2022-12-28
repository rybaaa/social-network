import React, {ChangeEvent} from 'react';
import {TextField} from "@mui/material";

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusType> {
    state = {
        editMode: false,
        status:this.props.status
    }

    activateEditModeOn = () => {
        this.setState({editMode: true})
    }

    activateEditModeOff = () => {
        this.setState({editMode: false})
        this.props.updateStatus(this.state.status)
    }
    changeStatusHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        console.log(this.state)
        this.setState({
            status:e.currentTarget.value
        })
    }


    render() {
        return (
            this.state.editMode
                ?
                <div>
                    <TextField id="status" variant="standard"
                               autoFocus
                               value={this.state.status}
                               onChange={this.changeStatusHandler}
                               onBlur={this.activateEditModeOff}/>
                </div>
                :
                <div>
                    <span onDoubleClick={this.activateEditModeOn}>Status: {this.props.status|| '_____'}</span>
                </div>
        );
    }


};

