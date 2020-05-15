import React from "react";
import { useMutation } from "react-apollo-hooks";
import PostBoxPresenter from "./PostBoxPresenter";
import { DELETE_CONTENTS, UNCONNECT_CONTENTSREQ} from "./PostBoxQueries";
import { CONNECT_APPLY } from "../../SharedQueries";

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
    refetch
}) => {
    const [connectApplyMutation] = useMutation(CONNECT_APPLY);
    const [deleteContentsMutation] = useMutation(DELETE_CONTENTS);
    const [unConnectContentsReqMutation] = useMutation(UNCONNECT_CONTENTSREQ);
    
    const ToggleApply = async(postId) => {
        try {
            await connectApplyMutation({
                variables: {
                    postId
                }   
            }); 
            refetch();
        } catch(e) {
            console.log(e);
        }
    };

    const handleDeleteContent = async(postId) => {
        try {
            await deleteContentsMutation({
                variables: {
                    postId
                }   
            }); 
        } catch(e) {
            console.log(e);
        }
    };

    const handleDeleteContentReq = async(postId) => {
        try {
            await unConnectContentsReqMutation({
                variables: {
                    postId
                }   
            });
            refetch();
        } catch(e) {
            console.log(e);
        }
    };

    return (
        <PostBoxPresenter
            iconImg={iconImg}
            postId={postId}
            avatar={avatar}
            userName={userName}
            isSelf={isSelf}
            applys={applys}
            isApply={isApply}
            isApplyWait={isApplyWait}
            isApplyReadCheck={isApplyReadCheck}
            applysCount={applysCount}
            commentCount={commentCount}
            location={location}
            lastDate={lastDate}
            categorys={categorys}
            viewApply={viewApply}
            anotherPage={anotherPage}
            ToggleApply={ToggleApply}
            handleDeleteContent={handleDeleteContent}
            handleDeleteContentReq={handleDeleteContentReq}
        />
    );
};