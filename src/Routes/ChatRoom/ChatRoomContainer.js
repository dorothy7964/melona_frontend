import React, { useState, useEffect, useRef, useCallback } from "react";
import { toast } from "react-toastify";
import { useQuery, useMutation } from "@apollo/client";
import {
  CHATROOMS_QUERY,
  SEE_CHATROOM,
  DELETE_CHATROOM,
  SEND_MESSAGE,
  NEW_MESSAGE,
  READCOUNT_MESSAGE,
} from "./ChatRoomQueries";
import ChatRoomPresenter from "./ChatRoomPresenter";
import useInput from "@am-hooks/use-input";

export default ({
  match: {
    params: { chatRoomId },
  },
  history,
}) => {
  const messageInput = useInput("");
  const chatLocation = useRef(null);
  const [sendLoading, setSendLoading] = useState(false);
  const [deleteRoomMutaion] = useMutation(DELETE_CHATROOM);
  const { data, loading, subscribeToMore } = useQuery(SEE_CHATROOM, {
    variables: {
      id: chatRoomId,
    },
  });
  const [sendMessageMutation] = useMutation(SEND_MESSAGE, {
    refetchQueries: () => [
      {
        query: SEE_CHATROOM,
        variables: {
          id: chatRoomId,
        },
      },
    ],
    variables: {
      message: messageInput.value,
      chatRoomId,
    },
  });
  const [readcountMsgMutation] = useMutation(READCOUNT_MESSAGE, {
    refetchQueries: () => [
      {
        query: SEE_CHATROOM,
        variables: {
          id: chatRoomId,
        },
      },
    ],
    variables: {
      chatRoomId,
    },
  });
  const more = useCallback(() => {
    return subscribeToMore({
      document: NEW_MESSAGE,
      variables: {
        chatRoomId,
      },
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        const newMessage = subscriptionData.data.newMessage;
        readcountMsgMutation();
        if (
          !prev.seeChatRoom.messages.find((msg) => msg.id === newMessage.id)
        ) {
          return Object.assign({}, prev, {
            seeChatRoom: Object.assign({}, prev.seeChatRoom, {
              messages: [...prev.seeChatRoom.messages, newMessage],
            }),
          });
        } else {
          return prev;
        }
      },
    });
  }, [chatRoomId, subscribeToMore, readcountMsgMutation]);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      setSendLoading(true);
      messageInput.setValue("");
      await sendMessageMutation();
      await readcountMsgMutation();
    } catch {
      toast.error("Cant send messageInput");
    } finally {
      setSendLoading(false);
    }
  };

  const onKeyPress = async (e) => {
    const { which } = e;
    if (which === 13) {
      e.preventDefault();
      try {
        setSendLoading(true);
        messageInput.setValue("");
        await sendMessageMutation();
        await readcountMsgMutation();
      } catch {
        console.log(e);
      } finally {
        setSendLoading(false);
      }
    }
  };

  const handleDeleteRoom = async (chatRoomId) => {
    history.push("/chat");
    try {
      await deleteRoomMutaion({
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

  const scrollBottom = () => {
    chatLocation.current.scrollIntoView({
      block: "end",
      behavior: "smooth",
    });
  };

  useEffect(() => {
    more();
  }, [more]);

  useEffect(() => {
    if (!loading) {
      scrollBottom();
    }
  }, [data, loading]);

  return (
    <ChatRoomPresenter
      chatRoomId={chatRoomId}
      data={data}
      loading={loading}
      newMessage={messageInput}
      sendLoading={sendLoading}
      chatLocation={chatLocation}
      onSubmit={onSubmit}
      onKeyPress={onKeyPress}
      handleDeleteRoom={handleDeleteRoom}
    />
  );
};
