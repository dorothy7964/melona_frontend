import React from "react";
import { useQuery } from "react-apollo-hooks";
import SearchMePresenter from "./SearchMePresenter";
import { SEARCHME_POST } from "./SearchMeQueries";

export default ({ match: { params: { term } } }) => {
    const { data, loading, refetch } = useQuery(SEARCHME_POST, {
        skip: term === undefined,
        variables: { term }
    });
    const handleRefetch = () => {
        refetch();
    };

    return (
        <SearchMePresenter 
            data={data}
            loading={loading}
            term={term}
            handleRefetch={handleRefetch}
        />
    );
};