import React from "react";
import { useQuery } from "react-apollo-hooks";
import SearchUserPresenter from "./SearchUserPresenter";
import { SEARCH_USER } from "./SearchUserQueries";

export default ({ term, searchRefetch, handleToggleFollow }) => {
  const { data, loading, refetch } = useQuery(SEARCH_USER, {
    skip: term === "",
    variables: { term },
  });

  if (searchRefetch === true) {
    refetch();
    return "";
  } else {
    return (
      <SearchUserPresenter
        data={data}
        loading={loading}
        term={term}
        handleToggleFollow={handleToggleFollow}
      />
    );
  }
};
