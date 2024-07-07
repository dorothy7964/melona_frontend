import React from "react";
import { Helmet } from "react-helmet";
import { Redirect, Link } from "react-router-dom";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import PostNone from "../../Components/PostNone";
import UserCard from "../../Components/UserCard";
import ButtonCircle from "../../Components/ButtonCircle";
import ButtonSquare from "../../Components/ButtonSquare";
import ApplyContents from "../../Components/ApplyContents";
import { Back } from "../../Components/Icons";

const Wrapper = styled.div`
  min-height: ${(props) => props.theme.minHeight};
`;

const ReplayLink = styled(Link)`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  svg {
    color: ${(props) => props.theme.darkGreyColor};
    font-size: 35pt;
  }
`;

const DeleteButton = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
`;

const FixButton = styled.div`
  @media (max-width: 1386px) {
    right: 6px;
  }
  background-color: #fff;
  border: 1px solid ${(props) => props.theme.lightGreenColor};
  border-radius: 50%;
  cursor: pointer;
  position: fixed;
  right: 10%;
  svg {
    color: ${(props) => props.theme.lightGreenColor};
  }
`;

const ConfirmButton = styled.div`
  margin-top: 30px;
  button {
    width: 100%;
    font-size: 15pt;
    font-weight: 500;
  }
`;

export default ({
  action,
  data,
  loading,
  postId,
  chatLocation,
  handleDelete,
  handleConfirm,
  handleScrollBottom,
}) => {
  if (loading === true) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  } else if (!loading && data && data.seeBuyOne) {
    const {
      seeBuyOne: {
        user: { avatar, userName },
        applys,
        applysCount,
        location,
        lastDate,
        categorys,
        anotherPage,
        groupRoom,
      },
    } = data;

    return (
      <Wrapper ref={chatLocation}>
        <Helmet>
          <title>신청자 보기 | Melona</title>
        </Helmet>
        {groupRoom === "none" ? (
          !anotherPage ? (
            <ReplayLink to={`/daddy`}>
              <Back />
            </ReplayLink>
          ) : (
            <ReplayLink to={`/daughter`}>
              <Back />
            </ReplayLink>
          )
        ) : !anotherPage ? (
          <ReplayLink to={`/groupRoom/${groupRoom}`}>
            <Back />
          </ReplayLink>
        ) : (
          <ReplayLink to={`/groupRoomMe/${groupRoom}`}>
            <Back />
          </ReplayLink>
        )}
        {action === "view" && (
          <React.Fragment>
            <UserCard
              bgColor="#eee"
              avatar={avatar}
              userName={userName}
              applys={applys}
              applysCount={applysCount}
              location={location}
              lastDate={lastDate}
            />
            <DeleteButton>
              {!anotherPage
                ? applysCount === 0 && (
                    <ButtonSquare
                      onClick={() => handleDelete("daddy", postId)}
                      text="게시물 삭제"
                      type="outlineRed"
                    />
                  )
                : applysCount === 0 && (
                    <ButtonSquare
                      onClick={() => handleDelete("daughter", postId)}
                      text="게시물 삭제"
                      type="outlineRed"
                    />
                  )}
            </DeleteButton>
            {applysCount === 0 && <PostNone />}
            <FixButton onClick={handleScrollBottom}>
              <ButtonCircle type="downArr" />
            </FixButton>
            {applys.map((apply) => (
              <div key={apply.id}>
                <ApplyContents
                  avatar={apply.user.avatar}
                  userName={apply.user.userName}
                  applyId={apply.id}
                  applyReadCheck={apply.readCheck}
                  postId={postId}
                  categorys={categorys}
                  anotherPage={anotherPage}
                />
              </div>
            ))}
            <ConfirmButton>
              {!anotherPage
                ? applysCount !== 0 && (
                    <ButtonSquare
                      onClick={() => handleConfirm("daddy", postId)}
                      text="완료 하기"
                    />
                  )
                : applysCount !== 0 && (
                    <ButtonSquare
                      onClick={() => handleConfirm("daughter", postId)}
                      text="완료 하기"
                    />
                  )}
            </ConfirmButton>
          </React.Fragment>
        )}
        {action === "daddy" &&
          (groupRoom === "none" ? (
            <Redirect to="/buy" />
          ) : (
            <Redirect to={`/groupRoom/${groupRoom}`} />
          ))}
        {action === "daughter" &&
          (groupRoom === "none" ? (
            <Redirect to="/apply" />
          ) : (
            <Redirect to={`/groupRoomMe/${groupRoom}`} />
          ))}
      </Wrapper>
    );
  }
};
