import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Avatar from "../../Components/Avatar";
import FatText from "../../Components/FatText";
import { Chat, User, PlusOutline } from "../../Components/Icons";
import ChangeTransition from "../../Components/ChangeTransition";
import ChangeMoreVertIcon from "../../Components/ChangeMoreVertIcon";

const TransitionBox = styled.div`
  @media (max-width: ${(props) => props.theme.maxWidthLarge}) {
    display: flex;
    button {
      margin-left: -35%;
    }
  }
  @media (max-width: ${(props) => props.theme.maxWidthMiddle}) {
    display: flex;
    button {
      margin-left: -35%;
    }
  }
  @media (max-width: 615px) {
    display: flex;
    button {
      margin-left: -62%;
    }
  }
  display: none;
  svg {
    color: ${(props) => props.theme.darkGreyColor};
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const Box = styled.div`
  ${(props) => props.theme.shadowBox};
  display: flex;
  background-color: white;
  width: 330px;
  padding: 20px;
`;

const SectionBox = styled(Box)`
  @media (max-width: ${(props) => props.theme.maxWidthLarge}) {
    display: none;
  }
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  span {
    font-size: 12pt;
  }
  svg {
    color: ${(props) => props.theme.melonaColor};
    margin-right: 10px;
  }
`;

const TextBox = styled.div`
  display: flex;
  align-items: center;
  height: 51px;
  span {
    display: inline-block;
    margin-left: 10px;
    width: 160px;
    height: 36%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: break-word;
    word-break: break-all;
  }
`;

export default ({ avatar, userName, handleLogout }) => (
  <React.Fragment>
    <TransitionBox>
      <ChangeMoreVertIcon userName={userName} handleLogout={handleLogout} />
    </TransitionBox>
    <Section>
      <SectionBox>
        <Avatar size="md" url={avatar} />
        <TextBox>
          <FatText text={userName} />
        </TextBox>
        <ChangeTransition userName={userName} handleLogout={handleLogout} />
      </SectionBox>
      <SectionBox>
        <Chat />
        <Link to="/Chat">
          <FatText text="채팅창 바로가기" />
        </Link>
      </SectionBox>
      <SectionBox>
        <User size="default" />
        <Link to="/friendList">
          <FatText text="친구 목록 보기" />
        </Link>
      </SectionBox>
      <SectionBox>
        <PlusOutline />
        <Link to={`/addGroupRoom/${userName}`}>
          <FatText text="방 만들기" />
        </Link>
      </SectionBox>
    </Section>
  </React.Fragment>
);
