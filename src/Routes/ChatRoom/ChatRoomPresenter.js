import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Loader from "../../Components/Loader";
import Avatar from "../../Components/Avatar";
import FatText from "../../Components/FatText";
import ButtonSquare from "../../Components/ButtonSquare";
import TimeIapse from "../../Components/TimeIapse";
import TextFields from "../../Components/TextFields";
import { Back, Send } from "../../Components/Icons";

const ReplayButton = styled.div`
  background-color: inherit;
  margin-bottom: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  svg {
    color: ${(props) => props.theme.darkGreyColor};
    font-size: 2.5rem;
  }
`;

const Wrapper = styled.div`
  min-height: 70vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ChatWrapper = styled.div`
  ${(props) => props.theme.whiteBox};
`;

const ChatTop = styled.div`
  ${(props) => props.theme.whiteBox_bottom};
  display: flex;
  align-items: center;
  width: 450px;
  padding: 20px;
`;

const CardLink = styled(Link)`
  color: inherit;
  margin: 0 10px;
  width: 250px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 20px;
`;

const ChatContents = styled.div`
  ${(props) => props.theme.whiteBox_bottom};
  padding: 20px;
  width: 450px;
  height: 350px;
  overflow-y: scroll;
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
`;

const ColumBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const MessageBubble = styled.div`
  background-color: ${(props) => props.bg} !important;
  ${(props) => props.theme.whiteBox};
  padding: 7px 5px;
  font-size: 12px;
  max-width: 300px;
  word-break: break-word;
`;

const TimeForm = styled.div`
  display: inline-block;
  margin-top: 5px;
  padding-left: 10px;
  font-weight: 400;
  font-size: 12px;
  opacity: 0.5;
`;

const ChatLast = styled.div`
  display: flex;
  padding: 10px;
  div {
    display: flex;
    flex: 1;
  }
  span {
    margin-left: 10px;
  }
`;

const SendButton = styled.span`
  margin-right: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  svg {
    color: ${(props) => props.color};
    transform: rotate(313deg);
    -moz-transform: rotate(313deg);
    -webkit-transform: rotate(313deg);
    -o-transform: rotate(313deg);
    -ms-transform: rotate(313deg);
  }
`;

export default ({
  chatRoomId,
  data,
  loading,
  newMessage,
  sendLoading,
  chatLocation,
  onSubmit,
  onKeyPress,
  handleDeleteRoom,
}) => {
  if (loading === true) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  } else if (!data) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  } else if (!loading && data && data.seeChatRoom) {
    const me = data.me.id;
    const { messages } = data.seeChatRoom;
    const { participants } = data.seeChatRoom;
    const toUser = participants.filter((participant) => participant.id !== me);
    const toUserName = toUser[0].userName;
    const toUserAvatar = toUser[0].avatar;

    return (
      <Wrapper>
        <Helmet>
          <title>{`${toUserName}님과 채팅 | Melona`}</title>
        </Helmet>
        <ReplayButton>
          <Link to="/chat">
            <Back />
          </Link>
        </ReplayButton>
        <ChatWrapper>
          <ChatTop>
            <Avatar size={"sm"} url={toUserAvatar} />
            <CardLink to={`/${toUserName}`}>
              <FatText text={toUserName} />
            </CardLink>
            <ButtonSquare
              type="text"
              text="채팅방 나가기"
              onClick={() => handleDeleteRoom(chatRoomId)}
            />
          </ChatTop>
          <ChatContents>
            <div ref={chatLocation}>
              {messages.length === 0
                ? ""
                : messages.map((message) =>
                    message.from.id !== me ? (
                      <MessageContainer key={message.id}>
                        <Avatar size={"sm"} url={message.from.avatar} />
                        <ColumBox>
                          <MessageBubble bg={"#FFF"}>
                            {message.text}
                          </MessageBubble>
                        </ColumBox>
                        <TimeForm>
                          <TimeIapse createAt={message.createdAt} />
                        </TimeForm>
                      </MessageContainer>
                    ) : (
                      <MessageContainer
                        key={message.id}
                        style={{ justifyContent: "flex-end" }}
                      >
                        <TimeForm>
                          <TimeIapse createAt={message.createdAt} />
                        </TimeForm>
                        <ColumBox>
                          <MessageBubble bg={"#FFE404"}>
                            {message.text}
                          </MessageBubble>
                        </ColumBox>
                      </MessageContainer>
                    ),
                  )}
            </div>
          </ChatContents>
          <ChatLast>
            <TextFields
              type="StandardMultiline"
              disabled={sendLoading}
              text=""
              inputText={newMessage.value}
              handleChange={newMessage.onChange}
              onKeyPress={onKeyPress}
            />
            {sendLoading ? (
              <SendButton onClick={onSubmit} color={"#999"}>
                <Send />
              </SendButton>
            ) : (
              <SendButton onClick={onSubmit} color={"#9ccc65"}>
                <Send />
              </SendButton>
            )}
          </ChatLast>
        </ChatWrapper>
      </Wrapper>
    );
  }
};
