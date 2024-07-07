import React from "react";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import BackRoute from "../../Components/BackRoute";
import PostBox from "../../Components/PostBox";
import daddy from "../../Icons/daddy.png";

const Wrapper = styled.div`
  min-height: ${(props) => props.theme.minHeight};
`;

export default ({ data, loading, term, groupRoomId, handleRefetch }) => {
  if (term === undefined) {
    return (
      <Wrapper>
        <BackRoute route={`groupRoom/${groupRoomId}`} />
      </Wrapper>
    );
  } else if (loading === true) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  } else if (data.searchPostGroup.length === 0) {
    return (
      <Wrapper>
        <BackRoute route={`groupRoom/${groupRoomId}`} />
      </Wrapper>
    );
  } else if (!loading && data && data.searchPostGroup) {
    const { searchPostGroup } = data;
    return (
      <Wrapper>
        <BackRoute type="icon" route={`groupRoom/${groupRoomId}`} />
        <PostBox
          data={searchPostGroup}
          iconImg={daddy}
          handleRefetch={handleRefetch}
        />
      </Wrapper>
    );
  }
};
