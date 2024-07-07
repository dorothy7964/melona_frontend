import React from "react";
import styled from "styled-components";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import CommentReUser from "./CommentReUser";
import Avatar from "./Avatar";
import FatText from "./FatText";
import TimeIapse from "./TimeIapse";
import { ArrowLeft } from "./Icons";

const Container = styled.div`
  flex: 1;
  overflow: hidden;
  word-wrap: break-word;
  padding: 0 30px;
`;

const Comments = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 12pt;
  &:not(:first-child) {
    margin-top: 10px;
  }
`;

const UserBox = styled.div`
  display: flex;
  flex-direction: row;
  span {
    display: flex;
    align-items: center;
    margin: 0 10px;
  }
`;

const TextBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  &:hover {
    div {
      visibility: visible;
    }
  }
  div {
    visibility: hidden;
  }
`;

const TimeForm = styled.div`
  margin-left: 15px;
  color: ${(props) => props.theme.darkGreyColor};
`;

const IconBox = styled.div`
  cursor: pointer;
  margin-left: 5px;
  svg {
    color: ${(props) => props.theme.darkGreyColor};
  }
`;

export default ({ seeComment, handleReply, handleDelete, handleReDelete }) => (
  <Container>
    {seeComment &&
      seeComment.map((comment) => (
        <React.Fragment key={comment.id}>
          <Comments>
            <UserBox>
              <Avatar size="sm" url={comment.user.avatar} />
              <FatText
                text={comment.user.userName}
                color={`
                            ${comment.user.isSelf ? "#9ccc65" : "black"}`}
              />
            </UserBox>
            <TextBox>
              {comment.text}
              {comment.user.isSelf && (
                <IconBox onClick={() => handleDelete(comment.id)}>
                  <HighlightOffIcon />
                </IconBox>
              )}
            </TextBox>
            <TimeForm>
              <TimeIapse createAt={comment.createdAt} />
            </TimeForm>
            <IconBox
              onClick={() =>
                handleReply(
                  comment.user.isSelf,
                  comment.user.avatar,
                  comment.user.userName,
                  comment.id,
                  comment.text,
                )
              }
            >
              <ArrowLeft />
            </IconBox>
          </Comments>
          <Comments>
            <CommentReUser comment={comment} handleReDelete={handleReDelete} />
          </Comments>
        </React.Fragment>
      ))}
  </Container>
);
