import React from "react";
import styled from "styled-components";
import Avatar from "./Avatar";
import FatText from "./FatText";
import CloseIcon from "@material-ui/icons/Close";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  align-items: center;
  font-size: 12pt;
  overflow: hidden;
  word-wrap: break-word;
  padding: 0 30px;
`;

const IconBox = styled.div`
  cursor: pointer;
  margin-right: 5px;
  svg {
    color: ${(props) => props.theme.darkGreyColor};
  }
`;

const BackColor = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid lightgray;
  padding: 20px 24px;
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
  align-items: center;
`;

export default ({ isReply, replyComment, handleToggleIsReply }) => (
  <React.Fragment>
    {isReply && (
      <Container>
        <IconBox onClick={handleToggleIsReply}>
          <CloseIcon />
        </IconBox>
        <BackColor>
          <UserBox>
            <Avatar size="sm" url={replyComment.avatar} />
            <FatText
              text={replyComment.userName}
              color={`
                            ${replyComment.isSelf ? "#9ccc65" : "black"}`}
            />
          </UserBox>
          <TextBox>{replyComment.text}</TextBox>
        </BackColor>
      </Container>
    )}
  </React.Fragment>
);
