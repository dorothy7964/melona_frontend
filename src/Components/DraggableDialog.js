import React from 'react';
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import { lightGreen, grey }from "@material-ui/core/colors";
import FatText from "./FatText";

const useStyles = makeStyles(theme => ({
    fabGreen: {
        color: lightGreen[600]
    },
    fabGrey: {
        color: grey[600]
    },
}));

function PaperComponent(props) {
    return (
        <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
            <Paper {...props} />
        </Draggable>
    );
}

const DraggableDialog = ({
    postId,
    open,
    iconImg,
    iconText,
    routeText,
    mainText,
    handleClose,
    handleClickOpen,
    handleCancel,
    handleAbort,
}) => {
    const classes = useStyles();

    return (
        <div>
            <Button onClick={handleClickOpen}>
                <img alt="loading" src={iconImg} /> 
                <FatText text={iconText} />
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title"
            >
                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                    {routeText}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <FatText text={mainText} />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleAbort} className={classes.fabGrey}>
                        <FatText text="취소" color={classes.fabGrey} />
                    </Button>
                    <Button onClick={() => handleCancel(postId)} className={classes.fabGreen} >
                        <FatText text="확인" color={classes.fabGreen} />
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

DraggableDialog.propTypes = {
    postId : PropTypes.string,
    open : PropTypes.bool.isRequired,
    iconImg : PropTypes.string.isRequired,
    iconText : PropTypes.string.isRequired,
    routeText : PropTypes.string.isRequired,
    mainText : PropTypes.string.isRequired,
    handleClose : PropTypes.func.isRequired,
    handleClickOpen : PropTypes.func.isRequired,
    handleCancel : PropTypes.func.isRequired,
    handleAbort : PropTypes.func.isRequired,
};

export default DraggableDialog;
