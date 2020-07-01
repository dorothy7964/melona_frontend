import React, { useState, useEffect } from "react";
import { useMutation } from "react-apollo-hooks";
import CheckContent from "../CheckContent";
import { TOGGLE_CONTENTREQ, TRUE_APPLY } from "./SeleteConfirmMeQueries";

export default ({ postId, contentId, contentText }) => {
    const [toggleContnetsReqMutation] = useMutation(TOGGLE_CONTENTREQ);
    
    // switches
    const [switchState, setSwitch] = useState(false);
    const [trueApplyMutation] = useMutation(TRUE_APPLY);

    const handleSwitch = (contentId, postId) => {
        setSwitch(!switchState);
        handleConnect(contentId, postId);
    };
    
    // switches & Mutation
    const handleConnect = async(contentId, postId) => {
        await toggleContnetsReqMutation({
            variables: {
                contentId
            }   
        });
        await trueApplyMutation({
            variables: {
                postId
            }   
        });
    };
        
    useEffect(() => {
        console.log("SeleteConfirmMeContainer");
        return () => {
            console.log("cleanup - SeleteConfirmMeContainer");
        };
    }, [switchState]);

    return (
        <CheckContent 
            postId={postId}
            contentText={contentText}
            switchState={switchState}
            handleState={contentId}
            handleSwitch={handleSwitch}
        />
    );
};