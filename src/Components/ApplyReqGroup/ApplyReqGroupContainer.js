import React from "react";
import { useQuery } from "react-apollo-hooks";
import ApplyReqGroupPresenter from "./ApplyReqGroupPresenter"
import { TOGGLE_POSTEDREQ } from "./ApplyReqGroupQueries";

export default ({ groupRoomId , tab, iconImg }) => {
    const { data, loading, refetch } = useQuery(TOGGLE_POSTEDREQ, {
        variables: { groupRoomId, tab }
    });
    
    return (
        <ApplyReqGroupPresenter 
            tab={tab}        
            iconImg={iconImg}        
            data={data}
            loading={loading}
            refetch={refetch}
        />
    );
};