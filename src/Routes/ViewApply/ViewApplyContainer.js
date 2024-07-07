import React, { useState, useRef } from "react";
import { toast } from "react-toastify";
import { useQuery, useMutation } from "react-apollo-hooks";
import ViewApplyPresenter from "./ViewApplyPresenter";
import { TOGGLE_VIEWAPPLY, DELETE_POST } from "./ViewApplyQueries";
import { SEE_BUY_ONE } from "../../SharedQueries";

export default ({
  match: {
    params: { postId },
  },
}) => {
  const chatLocation = useRef(null);
  const [action, setAction] = useState("view");
  const { data, loading } = useQuery(SEE_BUY_ONE, {
    variables: { postId },
  });
  const [deletePostMutation] = useMutation(DELETE_POST);
  const [toggleViewApplyMutation] = useMutation(TOGGLE_VIEWAPPLY);

  const handleDelete = async (route, postId) => {
    await deletePostMutation({
      variables: { postId },
    });
    toast.success("게시물이 삭제 되었습니다.");
    setAction(route);
  };

  const handleConfirm = async (route, postId) => {
    await toggleViewApplyMutation({
      variables: { postId },
    });
    toast.success("완료 되었습니다.");
    setAction(route);
  };

  const handleScrollBottom = () => {
    chatLocation.current.scrollIntoView({
      block: "end",
      behavior: "smooth",
    });
  };

  return (
    <ViewApplyPresenter
      action={action}
      data={data}
      loading={loading}
      postId={postId}
      chatLocation={chatLocation}
      handleDelete={handleDelete}
      handleConfirm={handleConfirm}
      handleScrollBottom={handleScrollBottom}
    />
  );
};
