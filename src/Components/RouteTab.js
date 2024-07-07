import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import daddyTab from "../Icons/daddyTab.png";
import daughterTab from "../Icons/daughterTab.png";

const Tabs = styled.div`
  display: flex;
  margin-bottom: 20px;
  cursor: pointer;
  button {
    &:first-child {
      background-color: ${(props) =>
        props.tab === "daddy" ? "white" : "#eee"};
    }
    &:last-child {
      background-color: ${(props) =>
        props.tab === "daughter" ? "white" : "#eee"};
    }
  }
`;

const LinkBox = styled(Link)`
  @media (max-width: ${(props) => props.theme.maxWidthLarge}) {
    padding: 64px 60px 13px 60px;
  }
  @media (max-width: ${(props) => props.theme.maxWidthMiddle}) {
    padding: 64px 10px 15px 10px;
  }
  padding: 64px 100px 13px 100px;
`;

const TabsButton = styled.button`
  @media (max-width: ${(props) => props.theme.maxWidthMiddle}) {
    img {
      width: 200px !important;
    }
  }
  border: 0;
  outline: none;
  cursor: pointer;
  width: 100%;
  padding: 15px 0;
  text-align: center;
  background-color: white;
  ${(props) => props.theme.shadowBox};
  &:not(:first-child) {
    margin-left: 20px;
  }
  img {
    width: 250px;
  }
`;

export default ({ type = "default", tabPage, groupRoomId }) => {
  const [tab, setTab] = useState(tabPage);

  return type === "default" ? (
    <React.Fragment>
      <Tabs tab={tab}>
        <TabsButton onClick={() => setTab("daddy")}>
          <LinkBox to="daddy">
            <img alt="daddyTab" src={daddyTab} />
          </LinkBox>
        </TabsButton>
        <TabsButton onClick={() => setTab("daughter")}>
          <LinkBox to="daughter">
            <img alt="daughterTab" src={daughterTab} />
          </LinkBox>
        </TabsButton>
      </Tabs>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <Tabs tab={tab}>
        <TabsButton onClick={() => setTab("daddy")}>
          <LinkBox to={`/groupRoom/${groupRoomId}`}>
            <img alt="daddyTab" src={daddyTab} />
          </LinkBox>
        </TabsButton>
        <TabsButton onClick={() => setTab("daughter")}>
          <LinkBox to={`/groupRoomMe/${groupRoomId}`}>
            <img alt="daughterTab" src={daughterTab} />
          </LinkBox>
        </TabsButton>
      </Tabs>
    </React.Fragment>
  );
};
