import React from "react";
import { useQuery } from "react-apollo-hooks";
import PropTypes from "prop-types";
import SearchCardPresenter from "./SearchCardPresenter";
import { SEARCH_USER } from "./SearchCardQueries";

const SearchCardContainer = ({ term, handleCreateRoom }) => {
  const { data, loading } = useQuery(SEARCH_USER, {
    skip: term.value === "",
    variables: {
      term: term.value,
    },
    fetchPolicy: "network-only",
  });

  return (
    <SearchCardPresenter
      data={data}
      loading={loading}
      handleCreateRoom={handleCreateRoom}
    />
  );
};

SearchCardContainer.propTypes = {
  term: PropTypes.shape({
    value: PropTypes.string.isRequired,
  }).isRequired,
  handleCreateRoom: PropTypes.func,
};

export default SearchCardContainer;
