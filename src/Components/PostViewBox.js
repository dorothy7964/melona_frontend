import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

const ViewBox = styled(Link)`
  color: inherit;
  justify-content: center;
  display: flex;
  padding: 20px;
  width: 100%;
  border-right: 1px solid ${(props) => props.theme.lightGreyColor};
  font-weight: 600;
  cursor: pointer;
  img {
    width: 50px;
    margin-right: 6px;
  }
`;

const HoverText = styled.div`
  position: relative;
  display: inline-block;
  &:hover {
    span {
      visibility: visible;
    }
  }
  span {
    visibility: hidden;
    width: 150px;
    background-color: ${(props) => props.theme.lightGreyColor};
    color: ${(props) => props.theme.blackColor};
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    /* Position the tooltip */
    position: absolute;
    z-index: 1;
    /* bottom: 76%; */
    left: 76%;
    margin-left: -60px;
  }
`;

const TextBox = styled.div`
  background-color: ${(props) => props.theme.lightGreenColor};
  border-radius: 59%;
  padding: 0 10px;
`;

const PostViewBox = ({ postId, iconImg, viewApply }) => {
  if (viewApply) {
    return (
      <ViewBox to={`/progress/${postId}`}>
        <img alt="신청자 보기" src={iconImg} />
        <HoverText>
          신청자 완료
          <span>진행 상황 바로가기</span>
        </HoverText>
      </ViewBox>
    );
  } else {
    return (
      <ViewBox to={`/viewApply/${postId}`}>
        <img alt="신청자 보기" src={iconImg} />
        <TextBox>신청자 보기</TextBox>
      </ViewBox>
    );
  }
};

PostViewBox.propTypes = {
  postId: PropTypes.string.isRequired,
  iconImg: PropTypes.string.isRequired,
  viewApply: PropTypes.bool.isRequired,
};

export default PostViewBox;
