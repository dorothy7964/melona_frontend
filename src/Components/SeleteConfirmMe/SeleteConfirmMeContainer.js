import React, { useState, useEffect } from "react";
import { useMutation } from "react-apollo-hooks";
import CheckContent from "../CheckContent";
import { TOGGLE_CONTENTREQ } from "./SeleteConfirmMeQueries";

export default ({ contentId, contentText }) => {
    const [toggleContnetsReqMutation] = useMutation(TOGGLE_CONTENTREQ);
    
    // switches
    const [switchState, setSwitch] = useState(false);

    const handleSwitch = (contentId) => {
        setSwitch(!switchState);
        handleConnect(contentId);
    };
    
    // switches & Mutation
    const handleConnect = async(contentId) => {
        await toggleContnetsReqMutation({
            variables: {
                contentId
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
            contentText={contentText}
            switchState={switchState}
            handleState={contentId}
            handleSwitch={handleSwitch}
        />
    );
};