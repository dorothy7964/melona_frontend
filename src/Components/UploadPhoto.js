import React from 'react';
import styled from "styled-components";
import { css } from "@emotion/core";
import { FadeLoader } from "react-spinners";
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import BackspaceIcon from '@material-ui/icons/Backspace';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import confirmFileText from "../Icons/confirmFileText.png";

const useStyles = makeStyles((theme) => ({
    input: {
        display: 'none',
        width: "20px"
    }
}));

const override = css`
    position: absolute;
    top: 52%;
    left: 27%;
`;

const Shadow = styled.div`
    ${props => props.theme.shadowBox}
    background-color: ${props => props.darkGreyColor};
`;

const Wrapper = styled(Shadow)`
    display: flex;
    margin-bottom: 20px;
    border: 1px solid ${props => props.theme.lightGreyColor};
    border-radius: 17px;
    overflow: hidden;
    height: 163px;
`;

const ConfirmFileBox = styled.div`
    img {
        width: 250px;
        height: 100%;
        background-size: cover;
    }
`;

const TextContainer = styled.span`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 245px;
    padding: 17px 15px;
`;

const FileButton = styled.span`
    font-size: 14pt;
    font-weight: 600;
    color: ${props => props.theme.darkGreyColor};
    margin-bottom: 3px;
`;

export default ({ 
    open,
    progressFile,
    fileLoading,
    handleClose,
    handleUpload,
    handleReset,
}) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">인증사진 업로드</DialogTitle>
                <DialogContent>
                    <Wrapper>
                        <ConfirmFileBox>
                            {progressFile === "none"
                                ?   <ConfirmFileBox>
                                        <img alt="인증 사진" src={confirmFileText} />
                                    </ConfirmFileBox>
                                :   <ConfirmFileBox>
                                        <img alt="인증 사진" src={progressFile} />
                                    </ConfirmFileBox>}
                        </ConfirmFileBox>
                        {fileLoading && 
                            <FadeLoader
                                css={override}
                                size={35}
                                color={"#9ccc65"}
                            />
                        }
                        <TextContainer>
                            <FileButton>
                                <input 
                                    onChange={handleUpload} 
                                    accept="image/*" 
                                    className={classes.input} 
                                    id="icon-button-file" 
                                    type="file" 
                                />
                                <label htmlFor="icon-button-file">
                                    <IconButton 
                                        color="primary" 
                                        aria-label="upload picture" 
                                        component="span"
                                    >
                                        <PhotoCamera />
                                    </IconButton>
                                </label>
                                <IconButton 
                                    color="default" 
                                    aria-label="delete picture" 
                                    component="span"
                                    onClick={handleReset}
                                >
                                    <BackspaceIcon />
                                </IconButton>
                            </FileButton>
                        </TextContainer>
                    </Wrapper>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    );
}
