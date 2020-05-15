import React, { useEffect } from "react";
import { useQuery } from "react-apollo-hooks";
import GroupDaddyPresenter from "./GroupDaddyPresenter";
import { SEEBUY_GROUP } from "./GroupDaddyQueries";

export default ({ groupRoomId }) => {
    const { data, loading, refetch } = useQuery(SEEBUY_GROUP, {
        variables: {
            groupRoomId
        }
    });

    useEffect(() => {
        refetch();
    }, []);
 
    return (
        <GroupDaddyPresenter 
            data={data}
            loading={loading}
            refetch={refetch}
            groupRoomId={groupRoomId}
        />
    );
};