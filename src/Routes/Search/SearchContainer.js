import React from "react";
import { useQuery } from "react-apollo-hooks";
import SearchPresenter from "./SearchPresenter";
import { SEARCH_POST } from "./SearchQueries";

export default ({ match: { params: { term } } }) => {
    const { data, loading, refetch } = useQuery(SEARCH_POST, {
        skip: term === undefined,
        variables: { term }
    });
    const handleRefetch = () => {
        refetch();
    };

    return (
        <SearchPresenter 
            data={data}
            loading={loading}
            term={term}
            handleRefetch={handleRefetch}
        />
    );
};