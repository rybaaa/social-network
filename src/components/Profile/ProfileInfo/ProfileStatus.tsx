import React, {ChangeEvent} from 'react';
import {TextField} from "@mui/material";

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditModeOn = () => {
        this.setState({editMode: true})
    }

    activateEditModeOff = () => {
        this.setState({editMode: false})
        this.props.updateStatus(this.state.status)
    }
    changeStatusHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusType>, prevState: Readonly<{}>) {
        if (prevProps.status !== this.props.status) {
            this.setState(
                {status: this.props.status}
            )
        }
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
                    <span onDoubleClick={this.activateEditModeOn}>Status: {this.props.status || '_____'}</span>
                </div>
        );
    }


};

