import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { lightGreen } from '@material-ui/core/colors';
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from '@material-ui/core/styles';
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Avatar from "../../Components/Avatar";
import FatText from "../../Components/FatText";
import FormDialogs from "../../Components/FormDialogs";
import AvatarDialogs from "../../Components/AvatarDialogs";
import ProgressDialogs from "../../Components/ProgressDialogs";
import TransferListDialogsAdd from "../../Components/TransferListDialogsAdd";
import TransferListDialogsDel from "../../Components/TransferListDialogsDel";
import GroupDaddy from "../GroupDaddy";
import { Back } from "../../Components/Icons";

const defaultMaterialTheme  = createMuiTheme({
    palette: {
        primary: lightGreen,
    }
});

const Wrapper = styled.div`
    min-height: ${props => props.theme.minHeight};
`;

const Section = styled.div`
    display: flex;
    &:first-child {
        a {
            svg {
                color: ${props => props.theme.darkGreyColor};
                font-size: 32pt;
            }
        }
    }
    &:last-child {
        flex:1;
        justify-content: center;
    }
`;

const CoverWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    @media (max-width: ${props => props.theme.maxWidthMiddle}){
        padding-right: 105px;
    }
`;

const AvatarBox = styled.div`
    div {
        @media (max-width: ${props => props.theme.maxWidthMiddle}){
            display: none;   
        }
    }
`;
        
const CoverContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 50px;
    div {
        &:not(:first-child) {
            margin-top: 10px;
        }
        &:first-child {
            span {
                font-size: 20pt;
            }
        }
    }
`;

const CoverBox = styled.div`
    display: flex;
`;

const TextBox = styled.span`
    max-width: 376px;
    span {
        display: inline-block;
        max-width: 376px;
        word-break: break-all;
    }
`;

const DialogBox = styled.div`
    display: flex;
    button {
        &:not(:first-child) {
            margin-left: 10px;
        }
    }
    div {
        margin: 0 !important;
    }
    span {
        font-size: 11pt !important;
        font-weight: 600;
    }
`;

export default ({ 
    data,
    loading,
    groupRoomId,
    progressOpen,
    formOpen,
    inputText,
    memberOpen,
    right,
    setRight,
    memberOpenDel,
    rightDel,
    setRightDel,
    handleClickOpenProgress,
    handleCloseProgress,
    handleChange,
    handleClickOpen,
    handleClose,
    handleEdit,
    handleClickOpenMember,
    handleCloseMember,
    handleAddMember,
    handleClickOpenMemberDel,
    handleCloseMemberDel,
    handleAddMemberDel,
}) => {
    if (loading === true){
        return (
            <Wrapper>
                <Loader />
            </Wrapper>
        );
    } else if (!loading && data && data.seeGroupRoom && data.me) {
        const { seeGroupRoom } = data;
        const { me: { userName } } = data;
        
        // TransferListDialogs: groupMember
        let userNameArr = [];
        let participants = seeGroupRoom.groupRoomMember[0].participants;
        participants.map(user => (
            userNameArr.push(user.userName)
        ));
        
        return (
            <Wrapper>
                <Helmet>
                    <title>{`${seeGroupRoom.roomName} | Melona`}</title>
                </Helmet>
                <CoverWrapper>
                    <Section>
                        <Link to={`/${userName}`}>
                            <Back />
                        </Link>
                    </Section>
                    <Section>
                        <AvatarBox>
                            <Avatar size="lg" url={seeGroupRoom.coverPhoto} />
                        </AvatarBox>
                        <CoverContainer>
                            <CoverBox>
                                <span>그룹 이름: &nbsp; </span>
                                <TextBox>
                                    <FatText text={seeGroupRoom.roomName} />
                                </TextBox>
                            </CoverBox>
                            <CoverBox>
                                <span>그룹 회장: &nbsp; </span>
                                <TextBox>
                                    <FatText text={seeGroupRoom.founderUser.userName} />
                                </TextBox>
                            </CoverBox>

                            {seeGroupRoom.founderUser.userName === userName 
                                ?   <ThemeProvider theme={defaultMaterialTheme}>
                                        <DialogBox>
                                            <AvatarDialogs 
                                                groupMember={
                                                    seeGroupRoom.groupRoomMember[0].participants
                                                }
                                            />
                                            <ProgressDialogs 
                                                groupRoomId={groupRoomId}
                                                progressOpen={progressOpen}
                                                handleClickOpenProgress={handleClickOpenProgress}
                                                handleCloseProgress={handleCloseProgress}
                                            />
                                        </DialogBox>
                                        <DialogBox>
                                            <FormDialogs 
                                                roomName={seeGroupRoom.roomName}
                                                formOpen={formOpen}
                                                inputText={inputText}
                                                handleChange={handleChange}
                                                handleClickOpen={handleClickOpen}
                                                handleClose={handleClose}
                                                handleEdit={handleEdit}
                                            />
                                            <TransferListDialogsAdd 
                                                userNameArr={userNameArr}
                                                groupMemberId={seeGroupRoom.groupRoomMember[0].id}
                                                memberOpen={memberOpen}
                                                right={right}
                                                setRight={setRight}
                                                handleClickOpenMember={handleClickOpenMember}
                                                handleCloseMember={handleCloseMember}
                                                handleAddMember={handleAddMember}
                                            />
                                            <TransferListDialogsDel 
                                                userNameArr={userNameArr}
                                                groupMemberId={seeGroupRoom.groupRoomMember[0].id}
                                                memberOpen={memberOpenDel}
                                                right={rightDel}
                                                setRight={setRightDel}
                                                handleClickOpenMember={handleClickOpenMemberDel}
                                                handleCloseMember={handleCloseMemberDel}
                                                handleAddMember={handleAddMemberDel}
                                            />
                                        </DialogBox>
                                    </ThemeProvider>
                                :   <DialogBox>
                                        <AvatarDialogs 
                                            groupMember={
                                                seeGroupRoom.groupRoomMember[0].participants
                                            }
                                        />
                                    </DialogBox>
                            }
                        </CoverContainer>
                    </Section>
                </CoverWrapper>
                <GroupDaddy 
                    groupRoomId={groupRoomId}
                />
            </Wrapper>
        );
    }
};


     
