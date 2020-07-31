import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import SearchUser from "../../Components/SearchUser";
import FriendListCard from "../../Components/FriendListCard";
import friendList from "../../Icons/friendList.png";

const Wrapper = styled.div`
    min-height: ${props => props.theme.minHeight};
    margin: 0 auto;
    width: 60%;
`;

const ShadowBox = styled.div`
    ${props => props.theme.shadowBox};
`;

const SearchBox = styled.div`
    @media (max-width: ${props => props.theme.maxWidthSmall}){
        padding: 10px;
    }
    padding: 30px;
`;

const TitleBox = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 10px;
    background-color: ${props => props.theme.titleGreyColor};
    img {
        @media (max-width: ${props => props.theme.maxWidthMiddle}){
            width: 50%;
        }
        @media (max-width: ${props => props.theme.maxWidthSmall}){
            width: 60%;
        }
        width: 35%;
    }
`;

export default ({ 
    data, 
    loading, 
    searchRefetch, 
    handleToggleFollow
}) => {
    if (loading === true){
        return (
            <Wrapper>
                <Loader />
            </Wrapper>
        );
    } else if (!loading && data && data.seeFollowing) {
        const { seeFollowing } = data;
        
        return (
            <Wrapper>
                <Helmet>
                    <title>친구 목록 | Melona</title>
                </Helmet>
                <TitleBox>
                    <img alt="friendList" src={friendList} />
                </TitleBox>
                <ShadowBox>
                    <SearchBox>
                        <SearchUser
                            searchRefetch={searchRefetch}
                            handleToggleFollow={handleToggleFollow}
                        />
                    </SearchBox>
                    {seeFollowing.map(user => (
                        <FriendListCard 
                            key={user.id}
                            buttonIcon="delete"
                            userAvatar={user.avatar}
                            userName={user.userName}
                            onClick={() => handleToggleFollow(user.userName, user.isFollowing)}
                        />
                    ))}
                </ShadowBox>
            </Wrapper>
        );
    }
};


     
