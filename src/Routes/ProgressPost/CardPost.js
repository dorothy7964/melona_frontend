import React from "react";
import styled from "styled-components";
import Avatar from "../../Components/Avatar";
import FatText from "../../Components/FatText";
import { Send } from "../../Components/Icons";

const Section = styled.div`
  display: grid;
  grid-gap: 48px;
  grid-template-columns: repeat(3, 280px);
  grid-template-rows: 280px;
  grid-auto-rows: 280px;
`;

const Shadow = styled.div`
  ${(props) => props.theme.shadowBox}
  background-color: ${(props) => props.color};
`;

const ShadowContainer = styled(Shadow)`
  width: 100%;
  font-weight: 600;
  min-height: 20vh;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  span {
    flex: 1;
    height: 23px;
    margin-left: 10px;
    width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const SendBox = styled.button`
  border: 0;
  background-color: inherit;
  outline: none;
  cursor: pointer;
  svg {
    transform: rotate(-34deg);
    color: ${(props) => props.theme.darkGreyColor};
  }
`;

const IconBox = styled.button`
  ${(props) => props.theme.whiteBox};
  width: 140px;
  height: 140px;
  margin-left: 25%;
  margin-top: 10%;
  outline: none;
  cursor: pointer;
  img {
    width: 100px;
  }
`;

export default ({ applysRead, success, failure, handleAction, handleChat }) => {
  return (
    <Section>
      {applysRead.map((apply) => (
        <ShadowContainer key={apply.id}>
          <Header>
            <Avatar size="sm" url={apply.user.avatar} />
            <FatText text={apply.user.userName} />
            <SendBox onClick={() => handleChat(apply.user.userName)}>
              <Send />
            </SendBox>
          </Header>
          {apply.progress ? (
            <IconBox onClick={() => handleAction(apply.user.userName, "popup")}>
              <img alt="success" src={success} />
            </IconBox>
          ) : (
            <IconBox onClick={() => handleAction(apply.user.userName, "user")}>
              <img alt="failure" src={failure} />
            </IconBox>
          )}
        </ShadowContainer>
      ))}
    </Section>
  );
};
