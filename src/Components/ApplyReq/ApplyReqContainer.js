import React from "react";
import { useQuery } from "react-apollo-hooks";
import ApplyReqPresenter from "./ApplyReqPresenter"
import { TOGGLE_POSTEDREQ } from "./ApplyReqQueries";

export default ({ tab, iconImg }) => {
    const { data, loading, refetch } = useQuery(TOGGLE_POSTEDREQ, {
        variables: { tab }
    });
    
    return (
        <ApplyReqPresenter 
            tab={tab}        
            iconImg={iconImg}        
            data={data}
            loading={loading}
            refetch={refetch}
        />
    );
};