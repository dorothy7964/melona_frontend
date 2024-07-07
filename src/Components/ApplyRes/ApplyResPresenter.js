import React from "react";
import styled from "styled-components";
import { ClipLoader } from "react-spinners";
import { css } from "@emotion/core";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../Loader";
import PostBox from "../PostBox";

const ScrollableDiv = styled(InfiniteScroll)`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* 스크롤 숨기기 */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;
const Spinners = css`
  display: block;
  margin: 0 auto;
  margin-top: 20px;
`;

const Wrapper = styled.div`
  min-height: ${(props) => props.theme.minHeight};
`;

export default ({ iconImg, data, hasMore, onLoadMore, refetch }) => {
  if (!data) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  } else if (data && data.togglePostedRes) {
    const { togglePostedRes } = data;

    return (
      <ScrollableDiv
        dataLength={togglePostedRes.length}
        next={onLoadMore}
        hasMore={hasMore}
        loader={<ClipLoader css={Spinners} size={35} color={"#c7c7c7"} />}
      >
        <PostBox data={togglePostedRes} iconImg={iconImg} refetch={refetch} />
      </ScrollableDiv>
    );
  }
};
