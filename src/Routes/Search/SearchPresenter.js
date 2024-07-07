import React from "react";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import BackRoute from "../../Components/BackRoute";
import PostBox from "../../Components/PostBox";
import daddy from "../../Icons/daddy.png";

const Wrapper = styled.div`
  min-height: ${(props) => props.theme.minHeight};
`;

export default ({ data, loading, term, handleRefetch }) => {
  if (term === undefined) {
    return (
      <Wrapper>
        <BackRoute route="daddy" />
      </Wrapper>
    );
  } else if (loading === true) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  } else if (data.searchPost.length === 0) {
    return (
      <Wrapper>
        <BackRoute route="daddy" />
      </Wrapper>
    );
  } else if (!loading && data && data.searchPost) {
    const { searchPost } = data;
    return (
      <Wrapper>
        <BackRoute type="icon" route="daddy" />
        <PostBox
          data={searchPost}
          iconImg={daddy}
          handleRefetch={handleRefetch}
        />
      </Wrapper>
    );
  }
};
