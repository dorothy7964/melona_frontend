import React from "react";
import { useQuery, useMutation } from "react-apollo-hooks";
import ProfilePresenter from "./ProfilePresenter";
import { GET_USER, LOG_OUT } from "./ProfileQueries";

export default ({
  match: {
    params: { userName },
  },
}) => {
  const [logOut] = useMutation(LOG_OUT);
  const { data, loading } = useQuery(GET_USER, {
    variables: { userName },
  });

  const handleLogout = () => {
    logOut();
  };

  return (
    <ProfilePresenter
      data={data}
      loading={loading}
      loginUserName={userName}
      handleLogout={handleLogout}
    />
  );
};
