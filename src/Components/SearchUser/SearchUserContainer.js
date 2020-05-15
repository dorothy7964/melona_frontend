import React from "react";
import { useQuery } from "react-apollo-hooks";
import SearchUserPresenter from "./SearchUserPresenter"
import { SEARCH_USER } from "./SearchUserQueries";

export default ({ term, handleToggleFollow }) =>  {
    const { data, loading } = useQuery(SEARCH_USER, {
        skip:  term === "",
        variables: { term }
    });
    
    return (
        <SearchUserPresenter 
            data={data}
            loading={loading}
            term={term}
            handleToggleFollow={handleToggleFollow}
        />
   );
};