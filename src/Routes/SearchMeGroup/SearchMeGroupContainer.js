import React from "react";
import { useQuery } from "react-apollo-hooks";
import SearchMeGroupPresenter from "./SearchMeGroupPresenter";
import { SEARCHME_POST_GROUP } from "./SearchMeGroupeQueries";

export default ({ match: { params: { groupRoomId, term } } }) => {
    const { data, loading, refetch } = useQuery(SEARCHME_POST_GROUP, {
        skip: term === undefined,
        variables: { groupRoomId, term }
    });
    const handleRefetch = () => {
        refetch();
    };

    return (
        <SearchMeGroupPresenter 
            data={data}
            loading={loading}
            term={term}
            groupRoomId={groupRoomId}
            handleRefetch={handleRefetch}
        />
    );
};