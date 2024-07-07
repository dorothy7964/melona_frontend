import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import SectionLeft from "./SectionLeft";
import SectionRight from "./SectionRight";

const Wrapper = styled.div`
  min-height: ${(props) => props.theme.minHeight};
  display: flex;
`;

const SectionLeftBox = styled.div`
  flex: 1;
`;

const SectionRightBox = styled.div``;

export default ({ data, loading, handleLogout }) => {
  if (loading === true) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  } else if (!loading && data && data.getUser) {
    const { getUser } = data;
    return (
      <Wrapper>
        <Helmet>
          <title>프로필 | Melona</title>
        </Helmet>
        <SectionLeftBox>
          <SectionLeft avatar={getUser.avatar} userName={getUser.userName} />
        </SectionLeftBox>
        <SectionRightBox>
          <SectionRight
            avatar={getUser.avatar}
            userName={getUser.userName}
            handleLogout={handleLogout}
          />
        </SectionRightBox>
      </Wrapper>
    );
  }
};
