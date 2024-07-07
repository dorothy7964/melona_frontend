import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useQuery, useMutation } from "react-apollo-hooks";
import ProgressPresenter from "./ProgressPresenter";
import {
  PROGRESS_APPLY,
  ROUTE_CHATROOM,
  CREATE_CHATROOM,
} from "./ProgressQueries";
import { SEE_BUY_ONE } from "../../SharedQueries";

export default ({
  history,
  match: {
    params: { postId },
  },
}) => {
  const [view, setView] = useState("post");
  const [viewUser, setViewUser] = useState();

  const { data, loading, refetch } = useQuery(SEE_BUY_ONE, {
    variables: { postId },
  });

  const [progressApplyMutation] = useMutation(PROGRESS_APPLY);
  const [routeChatRoomMutation] = useMutation(ROUTE_CHATROOM);
  const [createChatRoomMutation] = useMutation(CREATE_CHATROOM);

  // 진행완료 팝업
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setView("post");
  };

  const handleAction = (userName, view) => {
    if (view === "popup") {
      handleClickOpen();
    }
    setViewUser(userName);
    setView(view);
  };

  const handleProgressApply = async (userName) => {
    await progressApplyMutation({
      variables: {
        postId,
        userName,
      },
    });
    toast.success("진행이 완료 되었습니다.");
    setView("post");
    refetch();
  };

  // ChatRoom
  const handleChat = async (userName) => {
    const {
      data: { routeChatRoom },
    } = await routeChatRoomMutation({
      variables: {
        userName,
      },
    });

    if (routeChatRoom === "none") {
      const {
        data: { createChatRoom },
      } = await createChatRoomMutation({
        variables: {
          userName,
        },
      });
      toast.success("채팅창으로 이동합니다.");
      return history.push(`/chat/${createChatRoom.id}`);
    } else {
      toast.success("채팅창으로 이동합니다.");
      return history.push(`/chat/${routeChatRoom}`);
    }
  };

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <ProgressPresenter
      view={view}
      viewUser={viewUser}
      data={data}
      loading={loading}
      open={open}
      handleClickOpen={handleClickOpen}
      handleClose={handleClose}
      handleAction={handleAction}
      handleProgressApply={handleProgressApply}
      handleChat={handleChat}
    />
  );
};
