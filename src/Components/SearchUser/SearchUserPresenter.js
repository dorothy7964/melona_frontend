import React from "react";
import styled from "styled-components";
import Loader from "../Loader";
import FriendListCard from "../FriendListCard";
import { UserDisable } from "../Icons";
import friendSearch from "../../Icons/friendSearch.png";

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

const ShadowBox = styled.div`
    ${props => props.theme.shadowBox};
`;

const ShadowContainer = styled(ShadowBox)`
    display: flex;
    height: 50px;
    justify-content: center;
    align-items: center;
    svg {
        color: ${props => props.theme.darkGreyColor};
        /* 아이콘 방향 반전 */
        transform:rotate(0deg);
        -moz-transform: scaleX(-1); 
        -o-transform: scaleX(-1); 
        -webkit-transform: scaleX(-1); 
        transform: scaleX(-1);   
        filter: FlipH;
        -ms-filter: "FlipH";
    }
`;

export default ({ 
    data,
    loading,
    term,
    handleToggleFollow
}) => {
    if ( data === undefined) {
        return "";
    } else if (term === "") {
        return "";
    } else if (loading === true) {
        return (
            <ShadowContainer>
                <Loader type="small" />
            </ShadowContainer>
        );
    } else if (data.searchUser.length === 0) {
        return (
            <ShadowContainer>
                <UserDisable />
            </ShadowContainer>
        );
    } else if (!loading && data && data.searchUser) {
        const { searchUser } = data;
        return (
            <React.Fragment>
                <TitleBox>
                    <img alt="friendSearch" src={friendSearch} />
                </TitleBox>
                <ShadowBox>
                    {searchUser.map(user => (
                        <FriendListCard 
                            key={user.id}
                            buttonIcon="opinion"
                            userAvatar={user.avatar}
                            userName={user.userName}
                            isFollowing={user.isFollowing}
                            onClick={() => handleToggleFollow(user.userName, user.isFollowing)}
                        />
                    ))}
                </ShadowBox>
            </React.Fragment>
        );
    }
};