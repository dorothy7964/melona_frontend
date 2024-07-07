import React, { useState, useEffect } from "react";
import { useQuery } from "react-apollo-hooks";
import ProgressViewPresenter from "./ProgressViewPresenter";
import { CATEGORY_CONTENTSSELF } from "./ProgressViewQueries";
import { ME } from "../../SharedQueries";

export default ({ categoryId, anotherPage }) => {
  const {
    data: {
      me: { userName },
    },
  } = useQuery(ME);
  const { data, loading, refetch } = useQuery(CATEGORY_CONTENTSSELF, {
    variables: { categoryId, anotherPage },
  });

  const [changeId, setChangeId] = useState("");

  // 진행완료 팝업
  const [open, setOpen] = useState(false);

  const handleClickOpen = (id) => {
    setOpen(true);
    setChangeId(id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <ProgressViewPresenter
      data={data}
      loading={loading}
      changeId={changeId}
      anotherPage={anotherPage}
      userName={userName}
      open={open}
      handleClickOpen={handleClickOpen}
      handleClose={handleClose}
    />
  );
};
