import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PostCategory from "../PostCategory";
import PostViewBox from "../PostViewBox";
import PostApplyBox from "../PostApplyBox";
import UserCard from "../UserCard";
import CommentBadge from "../CommentBadge";

const Shadow = styled.div`
    ${props => props.theme.shadowBox};
    background-color: ${props => props.color};
    &:not(:first-child) { 
        margin-top: 30px;
    }
`;

const ShadowContainer = styled(Shadow)`
    width: 100%;
    font-weight: 600;
    min-height: 20vh;
`;

const Button = styled.div`
    display: flex;
    div {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const CommentBox = styled(Link)`
    color: inherit;
    justify-content: center;
    display: flex;
    padding: 20px;
    width: 100%;
    font-weight: 600;
    cursor: pointer;
    img {
        width: 38px;
        margin-right:20px;
    }
    div {
        &:first-child {
            margin-right: 10px;
        }
    }
`;

export default ({
    iconImg,
    postId,
    avatar,
    userName,
    isSelf,
    applys,
    isApply,
    isApplyWait,
    isApplyReadCheck,
    applysCount,
    commentCount,
    location,
    lastDate,
    categorys,
    viewApply,
    anotherPage,
    ToggleApply,
    handleDeleteContent,
    handleDeleteContentReq
}) => (
    <React.Fragment>
        <ShadowContainer>
            <UserCard 
                avatar={avatar}
                userName={userName}
                applys={applys}
                applysCount={applysCount}
                location={location}
                lastDate={lastDate}
            />
            <PostCategory 
                anotherPage={anotherPage}
                categorys={categorys}
            />
            <Button>
                {isSelf
                    ?   <PostViewBox 
                            iconImg={iconImg}
                            postId={postId}
                            viewApply={viewApply}
                        />
                    
                    :    <PostApplyBox 
                            anotherPage={anotherPage}
                            viewApply={viewApply}
                            isApply={isApply}
                            isApplyWait={isApplyWait}
                            isApplyReadCheck={isApplyReadCheck}
                            postId={postId}
                            ToggleApply={ToggleApply}
                            handleDeleteContent={handleDeleteContent}
                            handleDeleteContentReq={handleDeleteContentReq}
                        />
                }
                <CommentBox to={`/comment/${postId}`}>
                    <CommentBadge count={commentCount} />
                    <div>댓글 보기</div>
                </CommentBox>
            </Button>
        </ShadowContainer>
    </React.Fragment>
);
