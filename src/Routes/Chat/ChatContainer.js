import React, { useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import ChatPresenter from "./ChatPresenter";
import useInput from "@am-hooks/use-input";
import {
  CHATROOMS_QUERY,
  READCOUNT_MESSAGE,
  CREATE_CHATROOM,
  DELETE_CHATROOM,
} from "./ChatQueries";

export default ({ history }) => {
  const search = useInput("");
  const { data, loading, refetch, subscribeToMore } = useQuery(CHATROOMS_QUERY);
  const [createChatRoomMutaion] = useMutation(CREATE_CHATROOM);
  const [deleteChatRoomMutaion] = useMutation(DELETE_CHATROOM);
  const [readcountMsgMutation] = useMutation(READCOUNT_MESSAGE);

  const onSearchSubmit = (e) => {
    e.preventDefault();
  };

  const handleCreateRoom = async (userName) => {
    try {
      const {
        data: { createChatRoom },
      } = await createChatRoomMutaion({
        refetchQueries: () => [
          {
            query: CHATROOMS_QUERY,
          },
        ],
        variables: {
          userName,
        },
      });
      history.push(`/chat/${createChatRoom.id}`);
    } catch (e) {
      console.log(e);
    }
  };

  const handleDeleteRoom = async (chatRoomId) => {
    try {
      await deleteChatRoomMutaion({
        refetchQueries: () => [
          {
            query: CHATROOMS_QUERY,
          },
        ],
        variables: {
          chatRoomId,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  const handleEnterRoom = async (chatRoomId) => {
    try {
      const { data } = await readcountMsgMutation({
        refetchQueries: () => [
          {
            query: CHATROOMS_QUERY,
          },
        ],
        variables: {
          chatRoomId,
        },
      });
      if (data.readcountMessage) {
        history.push(`/chat/${chatRoomId}`);
      }
    } catch (e) {
      console.log(e);
      console.log("ChatContainer");
    }
  };

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <ChatPresenter
      data={data}
      loading={loading}
      refetch={refetch}
      subscribeToMore={subscribeToMore}
      searchTerm={search}
      onSubmit={onSearchSubmit}
      handleEnterRoom={handleEnterRoom}
      handleCreateRoom={handleCreateRoom}
      handleDeleteRoom={handleDeleteRoom}
    />
  );
};
