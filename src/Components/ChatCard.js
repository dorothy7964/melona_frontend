import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Avatar from "./Avatar";
import FatText from "./FatText";
import TimeIapse from "./TimeIapse";
import { DeleteCircle } from "./Icons";
import { NEW_MESSAGE } from "../Routes/ChatRoom/ChatRoomQueries";

const Card = styled.button`
  color: inherit;
  display: flex;
  flex-direction: row;
  padding: 15px;
  width: 100%;
  border: 0;
  outline: none;
  cursor: pointer;
  user-select: none;
  background-color: #fff;
  span {
    width: 250px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  &:hover {
    background-color: ${(props) => props.theme.bgColor};
    span {
      display: flex;
      width: 250px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`;

const CardMiddle = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  padding: 0 10px;
  span {
    display: flex;
  }
`;

const Message = styled.div`
  margin-top: 10px;
  width: 250px;
  color: inherit;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
`;

const CardLast = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const TimeForm = styled.div`
  display: inline-block;
  font-weight: 400;
  opacity: 0.5;
  font-size: 12px;
  padding-left: 5px;
`;

const ChatCount = styled.div`
  margin-top: 5px;
  padding: 2px 7px;
  border-radius: 50%;
  background: ${(props) => props.theme.lightGreenColor};
  color: ${(props) => props.theme.bgColor};
  font-weight: bold;
`;

const DeleteChat = styled.span`
  display: none;
  flex: 1;
  cursor: pointer;
  margin-left: 3px;
  svg {
    color: ${(props) => props.theme.redColor};
  }
`;

const ChatCard = ({
  chatRoomId,
  participants,
  unReadMsgCounter,
  lastMessage,
  lastMsgTime,
  me,
  refetch,
  subscribeToMore,
  handleEnterRoom,
  handleDeleteRoom,
}) => {
  participants = participants.filter((participant) => participant.id !== me.id);
  const avatar = participants[0].avatar;
  const userName = participants[0].userName;

  const more = () =>
    subscribeToMore({
      document: NEW_MESSAGE,
      variables: {
        chatRoomId,
      },
      updateQuery: () => {
        refetch();
      },
    });

  useEffect(() => {
    more();
  }, []);

  return (
    <Card>
      <Avatar size={"md"} url={avatar} />
      <CardMiddle onClick={() => handleEnterRoom(chatRoomId)}>
        <FatText text={userName} />
        <Message>{lastMessage}</Message>
      </CardMiddle>
      <CardLast>
        <TimeForm>
          <TimeIapse createAt={lastMsgTime} />
        </TimeForm>
        {unReadMsgCounter === 0 ? (
          <div />
        ) : (
          <ChatCount>{unReadMsgCounter}</ChatCount>
        )}
      </CardLast>
      <DeleteChat onClick={() => handleDeleteRoom(chatRoomId)}>
        <DeleteCircle />
      </DeleteChat>
    </Card>
  );
};

ChatCard.propTypes = {
  chatRoomId: PropTypes.string.isRequired,
  participants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      avatar: PropTypes.string,
      userName: PropTypes.string.isRequired,
    }),
  ).isRequired,
  unReadMsgCounter: PropTypes.number.isRequired,
  lastMessage: PropTypes.string,
  lastMsgTime: PropTypes.string,
  me: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
  refetch: PropTypes.func.isRequired,
  subscribeToMore: PropTypes.func.isRequired,
  handleEnterRoom: PropTypes.func.isRequired,
  handleDeleteRoom: PropTypes.func.isRequired,
};

export default ChatCard;
