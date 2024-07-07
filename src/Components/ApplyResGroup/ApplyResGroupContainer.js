import React from "react";
import { useQuery } from "react-apollo-hooks";
import ApplyResGroupPresenter from "./ApplyResGroupPresenter";
import { TOGGLE_POSTEDRES } from "./ApplyResGroupQueries";

export default ({ groupRoomId, tab, iconImg }) => {
  const { data, loading, refetch } = useQuery(TOGGLE_POSTEDRES, {
    variables: { groupRoomId, tab },
  });

  return (
    <ApplyResGroupPresenter
      tab={tab}
      iconImg={iconImg}
      data={data}
      loading={loading}
      refetch={refetch}
    />
  );
};
