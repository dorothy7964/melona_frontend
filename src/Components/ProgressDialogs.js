import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import { lightGreen } from '@material-ui/core/colors';
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from '@material-ui/core/styles';
import buy from "../Icons/buy.png";
import apply from "../Icons/apply.png";

const defaultMaterialTheme  = createMuiTheme({
    palette: {
        primary: lightGreen,
    }
});

const DialogContent = styled.div`
    display: flex;
    justify-content: center;
    width: 400px;
    height: 150px;
    margin-top: 15px;
`;

const ContentLink = styled(Link)`
    &:not(:last-child) {
        margin-right: 45px;
    }
    img {
        width: 100px;
    }
`;

export default ({ 
    groupRoomId,
    progressOpen,
    handleClickOpenProgress,
    handleCloseProgress,
}) => (
    <ThemeProvider theme={defaultMaterialTheme}>
        <Button variant="outlined" color="primary" onClick={handleClickOpenProgress}>
            진헹 상황 보기
        </Button>
        <Dialog open={progressOpen} onClose={handleCloseProgress} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">
                진헹 상황 보기
            </DialogTitle>
            <DialogContent>
                <ContentLink to={`/buyGroup/${groupRoomId}`}>
                <img alt="buy" src={buy} />
                </ContentLink>
                <ContentLink to={`/applyGroup/${groupRoomId}`}>
                    <img alt="apply" src={apply} />
                </ContentLink>
            </DialogContent>
        </Dialog>
    </ThemeProvider>
);
