import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import CardPost from "./CardPost";
import CardUser from "./CardUser";
import Loader from "../../Components/Loader";
import ReplayLink from "../../Components/ReplayLink";
import UserCard from "../../Components/UserCard";
import { Back }  from "../../Components/Icons";
import Daddy_Success from "../../Icons/melona_success.png";
import Daddy_Failure from "../../Icons/melona_failure.png";
import Daughter_Success from "../../Icons/req_success.png";
import Daughter_Failure from "../../Icons/req_failure.png";

const Wrapper = styled.div`
    min-height: ${props => props.theme.minHeight};
`;

const ReplayButton = styled.button`
    background-color: inherit;
    display: inline-block;
    width: 100%;
    margin-bottom: 30px;
    outline: none;
    cursor: pointer;
    border: 0;
    svg {
        color: ${props => props.theme.darkGreyColor};
        font-size: 35pt;
    }
`;

const UserContainer = styled.div`
    margin-top: 20px;
`;

export default ({ 
    view,
    viewUser,
    data, 
    loading, 
    handleAction,
    handleProgressApply,
    handleChat
}) => {
    if (loading === true){
        return (
            <Wrapper>
                <Loader />
            </Wrapper>
        );
    } else if (!loading && data && data.seeBuyOne) {
        const { 
            seeBuyOne: { 
                user: {
                    avatar,
                    userName
                },
                applysRead,
                applysReadCount,
                location,
                lastDate,
                categorys,
                anotherPage,
                groupRoom,
            } 
        } = data;
        
        return (
            <Wrapper>
                <Helmet>
                    <title>신청자 진행상황 | Melona</title>
                </Helmet>
                {view === "post" 
                    ?   groupRoom === "none"
                            ? !anotherPage
                                ? <ReplayLink 
                                    link="/daddy"
                                />
                                : <ReplayLink 
                                    link="/daughter"
                                />
                            : !anotherPage
                                ? <ReplayLink 
                                    link={`/groupRoom/${groupRoom}`}
                                />
                                : <ReplayLink 
                                    link={`/groupRoomMe/${groupRoom}`}
                                />
                    :   <ReplayButton
                            onClick={() => handleAction("", "post")}
                        >
                            <Back />
                        </ReplayButton>
                }
                <UserCard 
                    bgColor="#eee"
                    avatar={avatar}
                    userName={userName}
                    applys={applysRead}
                    applysCount={applysReadCount}
                    location={location}
                    lastDate={lastDate}
                />
                <UserContainer>
                    {view === "post" && (
                        !anotherPage 
                            ?    <CardPost 
                                    applysRead={applysRead}
                                    success={Daddy_Success}
                                    failure={Daddy_Failure}
                                    anotherPage={anotherPage}
                                    handleAction={handleAction}
                                    handleChat={handleChat}
                                />
                            :    <CardPost 
                                    applysRead={applysRead}
                                    success={Daughter_Success}
                                    failure={Daughter_Failure}
                                    anotherPage={anotherPage}
                                    handleAction={handleAction}
                                    handleChat={handleChat}
                                />
                    )}
                    {view === "user" && (
                        <CardUser
                            userName={viewUser}
                            categorys={categorys}
                            anotherPage={anotherPage}
                            handleProgressApply={handleProgressApply}
                        />
                    )}
                </UserContainer>
            </Wrapper>
        );
    }
};





