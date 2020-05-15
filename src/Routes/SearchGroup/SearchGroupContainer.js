import React from "react";
import { useQuery } from "react-apollo-hooks";
import SearchGroupPresenter from "./SearchGroupPresenter";
import { SEARCH_POST_GROUP } from "./SearchGroupQueries";

export default ({ match: { params: { groupRoomId, term } } }) => {
    const { data, loading, refetch } = useQuery(SEARCH_POST_GROUP, {
        skip: term === undefined,
        variables: { groupRoomId, term }
    });
    const handleRefetch = () => {
        refetch();
    };

    return (
        <SearchGroupPresenter 
            data={data}
            loading={loading}
            term={term}
            groupRoomId={groupRoomId}
            handleRefetch={handleRefetch}
        />
    );
};