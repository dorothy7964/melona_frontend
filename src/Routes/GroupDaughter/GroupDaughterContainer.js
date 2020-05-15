import React, { useEffect } from "react";
import { useQuery } from "react-apollo-hooks";
import GroupDaughterPresenter from "./GroupDaughterPresenter";
import { SEEBUYME_GROUP } from "./GroupDaughterQueries";

export default ({ groupRoomId }) => {
    const { data, loading, refetch } = useQuery(SEEBUYME_GROUP, {
        variables: {
            groupRoomId
        }
    });

    useEffect(() => {
        refetch();
    }, []);

    return (
        <GroupDaughterPresenter 
            data={data}
            loading={loading}
            refetch={refetch}
            groupRoomId={groupRoomId}
        />
    );
};