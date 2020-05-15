import React, { useState } from "react";
import { useMutation } from "react-apollo-hooks";
import { TOGGLECHECKCONFIRM_CONTENTS } from "./ApplyContentsQueries";
import CheckContent from "../CheckContent";

export default ({ 
    contentId,
    contentText,
    contentCheck,
}) => {
    
    const [checkContentsMutation] = useMutation(TOGGLECHECKCONFIRM_CONTENTS);

    // switches
    const [checked, setChecked] = useState(contentCheck);

    const handleSwitch = async(contentId) => {
        setChecked(!checked );
        await checkContentsMutation({
            variables: {
                contentId
            }   
        });
    };
    
    return (
        <CheckContent 
            contentText={contentText}
            switchState={checked}
            handleState={contentId}
            handleSwitch={handleSwitch}
        />
    );
};