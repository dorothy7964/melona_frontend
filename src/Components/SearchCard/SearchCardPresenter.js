import React from "react";
import styled from "styled-components";
import Loader from '../Loader';
import Avatar from "../Avatar";
import FatText from "../FatText"
import { UserDisable } from "../Icons"

const Wrapper = styled.div`
    margin-bottom: 10px;
    padding: 10px 20px;
    border-bottom: 1px solid ${props => props.theme.borderColor};
`;

const IconBox = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 15px;
    border-bottom: 1px solid ${props => props.theme.borderColor};
    svg {
        color: ${props => props.theme.darkGreyColor};
    }
`;

const Card = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 0;
    span {
        flex: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 5px 10px;
    }
`;

const CardButton = styled.button`
    border: 0;
    outline: none;
    cursor: pointer;
    background: #fff;
    color: ${props => props.theme.lightGreenColor};
    font-weight: 600;
`;

const SearchCardPresenter = ({ data, loading, handleCreateRoom }) => {
    if (data === undefined){
        return null;
    } else if (loading === true){
        return (
            <Wrapper>
                <Loader size={24} />
            </Wrapper>
        );
    } else if(data && data.searchUser){
        let { searchUser } = data;
        searchUser = searchUser.filter(
            searchUser => searchUser.isSelf !== true
        );

        return (
            <React.Fragment>
                {data.searchUser.length === 0 ? (
                    <IconBox>
                        <UserDisable />
                    </IconBox>
                ) : (
                        <Wrapper>
                            {searchUser.map(user => (
                                <Card key={user.id} >
                                    <Avatar size={"sm"} url={user.avatar} />
                                    <FatText text={user.userName} />
                                    <CardButton onClick={() => handleCreateRoom(user.userName)}>채팅하러가기</CardButton>
                                </Card>
                        ))}
                        </Wrapper>
                )}
            </React.Fragment>
        );
    }
}

export default SearchCardPresenter;


