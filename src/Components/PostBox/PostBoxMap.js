import React from "react";
import PostNone from "../PostNone";
import PostBoxContainer from "./PostBoxContainer";

export default ({ data, iconImg, refetch }) => {
    
    if (data.length === 0) {
        return (
            <PostNone />
        );
    } else {
        return (
            data.map(post => (
                <PostBoxContainer 
                    iconImg={iconImg}
                    key={post.id}
                    postId={post.id}
                    avatar={post.user.avatar}
                    userName={post.user.userName}
                    isSelf={post.user.isSelf}
                    applys={post.applys}
                    isApply={post.isApply}
                    isApplyWait={post.isApplyWait}
                    isApplyReadCheck={post.isApplyReadCheck}
                    applysCount={post.applysCount}
                    commentCount={post.commentCount}
                    location={post.location}
                    lastDate={post.lastDate}
                    categorys={post.categorys}
                    viewApply={post.viewApply}
                    anotherPage={post.anotherPage}
                    refetch={refetch}
                />
            ))
        );
    }
};