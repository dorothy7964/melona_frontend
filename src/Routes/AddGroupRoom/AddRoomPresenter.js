import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Togeter from "../../Icons/togeter.png";
import Loader from "../../Components/Loader";
import TextFields from "../../Components/TextFields";
import UploadPhoto from "../../Components/UploadPhoto";
import ButtonSquare from "../../Components/ButtonSquare";
import FatText from "../../Components/FatText";
import TransferList from "../../Components/TransferList";
import { User } from "../../Components/Icons";

const Box = styled.div`
    ${props => props.theme.shadowBox};
    background-color:white;
    width: 70%;
    margin: 0 auto;
`;

const Form = styled(Box)`
   padding: 40px;
    form {
        display: flex;
        flex-direction: column;
    }
`;

const Section = styled.div`
    &:not(:first-child) {
        @media (max-width: ${props => props.theme.maxWidthLarge}){
            margin-top: 20px;
        }
        margin-top: 30px;
    }
    span {
        color: ${props => props.theme.darkGreyColor};
    }
    img {
        @media (max-width: ${props => props.theme.maxWidthLarge}){
            width: 35%;
        }
        @media (max-width: ${props => props.theme.maxWidthMiddle}){
            width: 45%;
        }
        @media (max-width: ${props => props.theme.maxWidthSmall}){
            width: 55%;
        }
        width: 30%;
        display: flex;
        margin: 0 auto;
    }
`;

const CoverImgContainer = styled(Section)`
    display: flex;
    position: relative;
`;

const CoverImgBox = styled.div`
    @media (max-width: ${props => props.theme.maxWidthSmall}){
        width: 222px;
    }
    width: 280px;
    height: 157px;
    margin: 0 auto;
    background-image: url(${props => props.coverPhoto});
    display: block;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

const GroupNameContainer = styled(Section)`
    width: 83%;
    display: flex;
    margin: 0 auto;
`;

const UploadBox = styled.div`
    @media (max-width: ${props => props.theme.maxWidthLarge}){
        right: 16%;
    }
    @media (max-width: ${props => props.theme.maxWidthMiddle}){
        right: 7%;
    }
    @media (max-width: ${props => props.theme.maxWidthSmall}){
        right: 0;
    }
    display: flex;
    position: absolute;
    right: 22%;
    bottom: -17px;
    background-color: ${props => props.theme.titleGreyColor} !important;
    border-radius: 50%;
    ${props => props.theme.shadowBox}
    span {
       display: flex;
       align-items: center;
    }
    svg {
        color: ${props => props.theme.darkGreyColor};
        font-size: 22pt;
    }
`;

const ListContainer = styled(Section)`
    width: 100%;
`;

const ListBox = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    svg {
        color: ${props => props.theme.darkGreyColor};
        /* 아이콘 방향 전환 */
        transform:rotate(0deg);
        -moz-transform: scaleX(-1); 
        -o-transform: scaleX(-1); 
        -webkit-transform: scaleX(-1); 
        transform: scaleX(-1);   
        filter: FlipH;
        -ms-filter: "FlipH";
    }
    span {
        display: flex;
        font-size: 14pt;
        align-items: center;
        margin-left: 10px;
    }
`;

const Buttons = styled.div`
    display: flex;
    width: 100%;
    button {
        margin: 0 auto;
        height: 45px;
        font-size: 14pt;
        margin-top: 50px;
    }
`;

export default ({ 
    data,
    right,
    setRight,
    loading,
    roomName,
    coverPhoto,
    handleChangeRoomName,
    handleUpload,
    handleConfirm
}) => {
    if (loading === true){
        return (
            <Form>
                <Loader type="small" />
            </Form>
        );
    } else if (!loading && data && data.seeFollowing) {
        const { seeFollowing } = data;
        return(
            <Form>
                <Helmet>
                    <title>방 만들기 | Melona</title>
                </Helmet>
                <Section>
                    <img alt="img" src={Togeter} />
                </Section>
                <CoverImgContainer>
                    <CoverImgBox coverPhoto={coverPhoto} />
                    <UploadBox>
                        <UploadPhoto 
                            handleUpload={handleUpload}
                        />
                    </UploadBox>
                </CoverImgContainer>
                <GroupNameContainer>
                    <TextFields 
                        type="outlineFull"
                        text="그룹 이름"
                        inputText={roomName}
                        handleChange={handleChangeRoomName}
                    />
                </GroupNameContainer>
                <ListContainer>
                    <ListBox>
                        <User />
                        <FatText text="인원 추가" />
                    </ListBox>
                    <TransferList 
                        data={seeFollowing}
                        right={right}
                        setRight={setRight}
                    />
                </ListContainer>
                <Buttons>
                    <ButtonSquare onClick={handleConfirm} text="그룹 만들기" />
                </Buttons>  
            </Form>
        );

    }
};

