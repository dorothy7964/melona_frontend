import React, { useState, useEffect } from "react";
import { useQuery } from "react-apollo-hooks";
import ApplyGroupPresenter from "./ApplyGroupPresenter";
import { ME, SEEBUY_GROUP } from "../../SharedQueries";

export default ({ match: { params: { groupRoomId } }}) => {
    const [tab, setTab] = useState("req");
    const { refetch } = useQuery(SEEBUY_GROUP, {
        variables: {
            groupRoomId
        }
    });
    const { data, loading } = useQuery(ME);

    useEffect(() => {
        refetch();
    }, []);
    
    return (
        <ApplyGroupPresenter
            tab={tab}
            setTab={setTab}
            data={data}
            loading={loading}
            groupRoomId={groupRoomId}
        />
    );
};