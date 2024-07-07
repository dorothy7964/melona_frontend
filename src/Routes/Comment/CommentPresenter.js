import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import UserCard from "../../Components/UserCard";
import CommentUser from "../../Components/CommentUser";
import CommentReInfo from "../../Components/CommentReInfo";
import TextFields from "../../Components/TextFields";

const Wrapper = styled.div`
  min-height: ${(props) => props.theme.minHeight};
`;

const Shadow = styled.div`
    ${(props) => props.theme.shadowBox}
    background-color: ${(props) => props.color};
    margin-top: 0px !important
    &:not(:first-child) { 
        margin-top: 50px;
    }
`;

const CommentContainer = styled(Shadow)`
  min-height: 24rem;
  margin-top: 20px;
  padding: 30px;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  padding: 30px;
`;

const Section = styled.div`
  &:first-child {
    flex: 1;
    margin-bottom: 30px;
  }
  &:last-child {
    form {
      width: 97%;
    }
  }
`;

const ReInfoBox = styled.div``;

export default ({
  data,
  loading,
  postData,
  postLoading,
  inputText,
  inputLoading,
  isReply,
  replyComment,
  handleChange,
  handleReply,
  handleKeyPress,
  handleToggleIsReply,
  handleDelete,
  handleReDelete,
}) => {
  if (loading === true || postLoading === true) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  } else if (
    !loading &&
    !postLoading &&
    data &&
    data.seeComment &&
    postData &&
    postData.seeBuyOne
  ) {
    const {
      seeBuyOne: { location, lastDate, applys, applysCount },
    } = postData;
    const {
      seeBuyOne: {
        user: { avatar, userName },
      },
    } = postData;
    const { seeComment } = data;

    return (
      <Wrapper>
        <Helmet>
          <title>신청하기 | Melona</title>
        </Helmet>
        <UserCard
          bgColor="#eee"
          avatar={avatar}
          userName={userName}
          applys={applys}
          applysCount={applysCount}
          location={location}
          lastDate={lastDate}
        />
        <CommentContainer>
          <Section>
            <CommentUser
              seeComment={seeComment}
              handleReply={handleReply}
              handleDelete={handleDelete}
              handleReDelete={handleReDelete}
            />
          </Section>
          <ReInfoBox>
            <CommentReInfo
              isReply={isReply}
              replyComment={replyComment}
              handleToggleIsReply={handleToggleIsReply}
            />
          </ReInfoBox>
          <Section>
            <form onKeyPress={handleKeyPress}>
              <TextFields
                type="outlineFull"
                text="댓글 달기"
                disabled={inputLoading}
                inputText={inputText}
                handleChange={handleChange}
              />
            </form>
          </Section>
        </CommentContainer>
      </Wrapper>
    );
  }
};
