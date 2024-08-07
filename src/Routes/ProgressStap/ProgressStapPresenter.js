import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import UserCard from "../../Components/UserCard";
import ButtonSquare from "../../Components/ButtonSquare";
import ProgressView from "../../Components/ProgressView";
import { Back } from "../../Components/Icons";

const Wrapper = styled.div`
  min-height: ${(props) => props.theme.minHeight};
`;

const ApplyUserBox = styled.div`
  margin: 30px 0;
  button {
    width: 100%;
    font-size: 15pt;
    font-weight: 500;
  }
`;

const ReplayButton = styled.div`
  background-color: inherit;
  width: 100%;
  margin-bottom: 30px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  svg {
    color: ${(props) => props.theme.darkGreyColor};
    font-size: 2.5rem;
  }
`;

export default ({ data, loading, handleProgressApply }) => {
  if (loading === true) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  } else if (!loading && data && data.seeBuyOne) {
    const {
      seeBuyOne: {
        user,
        applysRead,
        applysReadCount,
        location,
        lastDate,
        categorys,
        isProgress,
        anotherPage,
        groupRoom,
      },
    } = data;

    return (
      <Wrapper>
        <Helmet>
          <title>진행상황 | Melona</title>
        </Helmet>
        <ReplayButton>
          {groupRoom === "none" ? (
            !anotherPage ? (
              <Link to="/buy">
                <Back />
              </Link>
            ) : (
              <Link to="/apply">
                <Back />
              </Link>
            )
          ) : !anotherPage ? (
            <Link to={`/groupRoom/${groupRoom}`}>
              <Back />
            </Link>
          ) : (
            <Link to={`/groupRoomMe/${groupRoom}`}>
              <Back />
            </Link>
          )}
        </ReplayButton>
        <UserCard
          bgColor="#eee"
          avatar={user.avatar}
          userName={user.userName}
          applys={applysRead}
          applysCount={applysReadCount}
          location={location}
          lastDate={lastDate}
        />
        <ApplyUserBox>
          {anotherPage === true && isProgress === false && (
            <ButtonSquare
              text="전체 진행상황 완료"
              onClick={() => handleProgressApply(groupRoom)}
            />
          )}
        </ApplyUserBox>
        {categorys.map((category) => (
          <ProgressView
            key={category.id}
            categoryId={category.id}
            anotherPage={anotherPage}
          />
        ))}
      </Wrapper>
    );
  }
};
