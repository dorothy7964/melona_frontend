import React from "react";
import { useQuery } from "react-apollo-hooks";
import ApplyResPresenter from "./ApplyResPresenter"
import { TOGGLE_POSTEDRES } from "./ApplyResQueries";

export default ({ tab, iconImg }) => {
    const { data, loading, refetch } = useQuery(TOGGLE_POSTEDRES, {
        variables: { tab }
    });
    
    return (
        <ApplyResPresenter 
            tab={tab}        
            iconImg={iconImg}        
            data={data}
            loading={loading}
            refetch={refetch}
        />
    );
};