import React, { useState, useEffect } from "react";
import { useQuery } from "react-apollo-hooks";
import ApplyPresenter from "./ApplyPresenter";
import { ME, SEE_BUYME } from "../../SharedQueries";

export default () => {
  const [tab, setTab] = useState("req");
  const { refetch } = useQuery(SEE_BUYME);
  const { data, loading } = useQuery(ME);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <ApplyPresenter tab={tab} setTab={setTab} data={data} loading={loading} />
  );
};
