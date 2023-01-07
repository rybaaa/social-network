import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, {AlertProps} from '@mui/material/Alert';
import {setAppErrorAC} from "../../redux/appReducer";
import {AppStoreType} from "../../redux/redux-store";
import {connect} from "react-redux";

type MapStatePropsType = {
    error: null | string
}

type MapDispatchPropsType = {
    setAppErrorAC: (error: null | string) => void
}

type ErrorSnackbarPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppStoreType): MapStatePropsType => {
    return {
        error: state.app.error
    }
}


const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


function ErrorSnackbar(props:ErrorSnackbarPropsType) {

    const handleClose = (event?: React.SyntheticEvent<any> | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        props.setAppErrorAC(null)
    };

    return (
        <Snackbar anchorOrigin={{ vertical: "bottom", horizontal: "center" }} open={props.error !== null} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error" sx={{width: '100%'}}>
                {props.error}
            </Alert>
        </Snackbar>
    );
}

export default connect(mapStateToProps, {setAppErrorAC})(ErrorSnackbar)