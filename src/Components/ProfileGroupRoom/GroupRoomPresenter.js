import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

const Section = styled.div`
  display: grid;
  grid-gap: 13px;
  grid-template-columns: repeat(3, 190px);
  grid-template-rows: 190px;
  grid-auto-rows: 190px;
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

export default ({ data, loading }) => {
  if (loading === true) {
    return <Section>로딩중</Section>;
  } else if (!loading && data && data.allGroupRoom) {
    const { allGroupRoom } = data;
    return (
      <Section>
        {allGroupRoom.map((groupRoom) => (
          <ShadowContainer>{groupRoom.roomName}</ShadowContainer>
        ))}
      </Section>
    );
  }
};
