import { gql } from "apollo-boost";

export const PROGRESS_APPLY = gql`
  mutation progressApply($postId: String!, $userName: String!) {
    progressApply(postId: $postId, userName: $userName)
  }
`;

export const ROUTE_CHATROOM = gql`
  mutation routeChatRoom($userName: String!) {
    routeChatRoom(userName: $userName)
  }
`;

export const CREATE_CHATROOM = gql`
  mutation createChatRoom($userName: String!) {
    createChatRoom(userName: $userName) {
      id
    }
  }
`;
