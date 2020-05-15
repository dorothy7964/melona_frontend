import React, { useState } from "react";
import { useMutation } from "react-apollo-hooks";
import { TOGGLECONFIRM_CONTENTREQ } from "./ApplyContentsQueries";
import CheckContent from "../CheckContent";

export default ({ 
    contentText,
    contentReqId,
    contentReqCheck,
}) => {
    const [checkContentsMutation] = useMutation(TOGGLECONFIRM_CONTENTREQ);

    // switches
    const [checked, setChecked] = useState(contentReqCheck);

    const handleSwitch = async(contentReqId) => {
        setChecked(!checked );
        await checkContentsMutation({
            variables: {
                contentReqId
            }   
        });
    };
    
    return (
        <CheckContent 
            contentText={contentText}
            switchState={checked}
            handleState={contentReqId}
            handleSwitch={handleSwitch}
        />
    );
};