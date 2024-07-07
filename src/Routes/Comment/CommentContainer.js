import React, { useState } from "react";
import { toast } from "react-toastify";
import { useQuery, useMutation } from "react-apollo-hooks";
import CommentPresenter from "./CommentPresenter";
import {
  SEE_COMMENT,
  ADD_COMMENT,
  CONNECT_REPLY,
  DELETE_COMMENT,
  REDELETE_COMMENT,
} from "./CommentQueries";
import { SEE_BUY_ONE } from "../../SharedQueries";

export default ({
  match: {
    params: { postId },
  },
}) => {
  // 댓글 입력
  const [inputText, setInput] = useState("");
  const [inputLoading, setLoading] = useState(false);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // 답글할 유저 정보
  const [isReply, setIsReply] = useState(false);
  const [replyComment, setReplyComment] = useState({});

  const { data: postData, loading: postLoading } = useQuery(SEE_BUY_ONE, {
    variables: { postId },
  });
  const { data, loading, refetch } = useQuery(SEE_COMMENT, {
    variables: { postId },
  });
  const [connectReplyMutation] = useMutation(CONNECT_REPLY);
  const [addCommentMutation] = useMutation(ADD_COMMENT, {
    variables: { postId, text: inputText },
  });

  // 대댓글 유저 토글
  const handleToggleIsReply = () => {
    setIsReply(false);
    setInput("");
  };

  // 대댓글 할 유저
  const handleReply = (isSeif, avatar, userName, commentId, text) => {
    setIsReply(!isReply);
    setReplyComment({
      avatar,
      userName,
      commentId,
      text,
    });
  };

  // 댓글 달기
  const handleKeyPress = async (e) => {
    const { which } = e;
    if (which === 13) {
      e.preventDefault();

      // 대댓글 달기
      if (isReply) {
        try {
          setLoading(true);
          setIsReply(false);
          setInput("");
          refetch();
          return await connectReplyMutation({
            variables: {
              commentId: replyComment.commentId,
              text: inputText,
            },
          });
        } catch {
          console.log(e);
          toast.error("Cant send comment");
        } finally {
          setLoading(false);
        }
      }

      try {
        setLoading(true);
        setIsReply(false);
        setInput("");
        await addCommentMutation();
        refetch();
      } catch {
        console.log(e);
        toast.error("Cant send comment");
      } finally {
        setLoading(false);
      }
    }
  };

  // 댓글 삭제
  const [deleteCommentMutation] = useMutation(DELETE_COMMENT);

  const handleDelete = async (commentId) => {
    await deleteCommentMutation({
      variables: { commentId },
    });
    refetch();
    toast.success("댓글을 삭제합니다.");
  };
  // 대댓글 삭제
  const [redeleteCommentMutation] = useMutation(REDELETE_COMMENT);

  const handleReDelete = async (recommentId) => {
    await redeleteCommentMutation({
      variables: { recommentId },
    });
    refetch();
    toast.success("대댓글을 삭제합니다.");
  };

  return (
    <CommentPresenter
      data={data}
      loading={loading}
      postData={postData}
      postLoading={postLoading}
      inputText={inputText}
      inputLoading={inputLoading}
      isReply={isReply}
      replyComment={replyComment}
      handleChange={handleChange}
      handleReply={handleReply}
      handleKeyPress={handleKeyPress}
      handleToggleIsReply={handleToggleIsReply}
      handleDelete={handleDelete}
      handleReDelete={handleReDelete}
    />
  );
};
