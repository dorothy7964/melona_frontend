import { gql } from "apollo-boost";

export const SEE_COMMENT = gql`
  query seeComment($postId: String!) {
    seeComment(postId: $postId) {
      id
      text
      reply
      reCommentCount
      recomments {
        id
        text
        user {
          avatar
          userName
          isSelf
        }
        createdAt
      }
      createdAt
      user {
        avatar
        userName
        isSelf
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($postId: String!, $text: String!) {
    addComment(postId: $postId, text: $text) {
      id
      text
      user {
        userName
      }
    }
  }
`;

export const CONNECT_REPLY = gql`
  mutation connectReply($commentId: String!, $text: String!) {
    connectReply(commentId: $commentId, text: $text)
  }
`;

export const DELETE_COMMENT = gql`
  mutation deleteComment($commentId: String!) {
    deleteComment(commentId: $commentId)
  }
`;

export const REDELETE_COMMENT = gql`
  mutation redeleteComment($recommentId: String!) {
    redeleteComment(recommentId: $recommentId)
  }
`;
