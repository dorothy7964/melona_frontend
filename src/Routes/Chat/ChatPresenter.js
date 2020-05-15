import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import ChatCard from "../../Components/ChatCard";
import Input from "../../Components/Input";
import SearchCard from "../../Components/SearchCard";

const Wrapper = styled.div`
    min-height: ${props => props.theme.minHeight};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Chat = styled.div`
    ${props => props.theme.whiteBox};    
    width: 450px;
    height: 500px;
    overflow-y: scroll;
`;

const SearchForm = styled.form`
    text-align: center;
    padding: 20px 0;
`;

const SearchInput = styled(Input)`
    background-color: ${props => props.theme.bgColor};
    padding: 5px;
    font-size: 14px;
    border-radius: 3px;
    height: auto;
    text-align: center;
    width: 95%;
    &::placeholder {
        opacity: 0.8;
        font-weight: 200;
    }
`;

export default ({
    data,
    loading, 
    refetch,
    subscribeToMore,
    searchTerm,
    onSubmit,
    handleEnterRoom,
    handleCreateRoom,
    handleDeleteRoom
}) => {
    if (loading === true || !data){
        return (
            <Wrapper>
                <Loader />
            </Wrapper>
        );
    } else if (!loading && data && data.seeChatRooms) {
        const { seeChatRooms } = data;
        
        return (
            <Wrapper>
                <Helmet>
                    <title>채팅 목록 | Melona</title>
                </Helmet>
                <Chat>
                    <SearchForm onSubmit={onSubmit}>
                        <SearchInput
                            value={searchTerm.value}
                            onChange={searchTerm.onChange}
                            placeholder="채팅할 유저 검색"
                        />
                    </SearchForm>    
                    <SearchCard 
                        term={searchTerm}
                        handleCreateRoom={handleCreateRoom}
                    />
                    {seeChatRooms.map(chatRoom => (
                        <ChatCard 
                            key={chatRoom.id}
                            chatRoomId={chatRoom.id}
                            participants={chatRoom.participants}
                            lastMessage={chatRoom.lastMessage}
                            lastMsgTime={chatRoom.lastMsgTime}
                            unReadMsgCounter={chatRoom.unReadMsgCounter}
                            refetch={refetch}
                            subscribeToMore={subscribeToMore}
                            handleEnterRoom={handleEnterRoom}
                            handleDeleteRoom={handleDeleteRoom}
                            me={data.me}
                        />
                    ))}
                </Chat>
            </Wrapper>
        );
    }
};