import React, { useState, useEffect } from "react";
import { useQuery } from "react-apollo-hooks";
import ProgressApplyPresenter from "./ProgressApplyPresenter";
import { CATEGORY_CONTENTS } from "./ProgressApplyQueries";

export default ({ categoryId, userName, anotherPage }) => {
  const { data, loading, refetch } = useQuery(CATEGORY_CONTENTS, {
    variables: { categoryId, userName, anotherPage }
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
    <ProgressApplyPresenter
      data={data}
      loading={loading}
      changeId={changeId}
      userName={userName}
      anotherPage={anotherPage}
      open={open}
      handleClickOpen={handleClickOpen}
      handleClose={handleClose}
    />
  );
};
