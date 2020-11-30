import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { createMuiTheme } from '@material-ui/core/styles';
import { lightGreen } from '@material-ui/core/colors';
import { ThemeProvider } from "@material-ui/styles";
import TextFields from "./TextFields";

const defaultMaterialTheme  = createMuiTheme({
    palette: {
        primary: lightGreen,
    }
});

export default ({ 
    roomName ,
    formOpen,
    inputText,
    handleChange,
    handleClickOpen,
    handleClose,
    handleEdit
}) => (
    <ThemeProvider theme={defaultMaterialTheme}>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            그룹 이름 편집
        </Button>
        <Dialog open={formOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">
                {roomName}
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    변경 할 그룹 이름 작성을 작성 해주세요.
                </DialogContentText>
                <TextFields 
                    type="StandardFull"
                    text="그룹 이름"
                    inputText={inputText}
                    handleChange={handleChange}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    취소 하기
                </Button>
                <Button onClick={handleEdit} color="primary">
                    변경 하기
                </Button>
            </DialogActions>
        </Dialog>
    </ThemeProvider>
);
