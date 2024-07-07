import { gql } from "@apollo/client";

export const CHATROOMS_QUERY = gql`
  query {
    seeChatRooms {
      id
    }
  }
`;

export const SEE_CHATROOM = gql`
  query seeChatRoom($id: String!) {
    seeChatRoom(id: $id) {
      participants {
        id
        userName
        avatar
      }
      messages {
        id
        text
        readMessage
        createdAt
        from {
          id
          avatar
          userName
        }
        to {
          id
        }
      }
    }
    me {
      id
      userName
    }
  }
`;

export const DELETE_CHATROOM = gql`
  mutation deleteChatRoom($chatRoomId: String!) {
    deleteChatRoom(chatRoomId: $chatRoomId) {
      id
    }
  }
`;

export const SEND_MESSAGE = gql`
  mutation sendMessage(
    $chatRoomId: String
    $message: String!
    $userName: String
  ) {
    sendMessage(
      chatRoomId: $chatRoomId
      message: $message
      userName: $userName
    ) {
      id
      text
      createdAt
      from {
        id
        avatar
        userName
      }
      to {
        id
      }
      chatRoom {
        id
      }
    }
  }
`;

export const NEW_MESSAGE = gql`
  subscription newMessage($chatRoomId: String!) {
    newMessage(chatRoomId: $chatRoomId) {
      id
      text
      readMessage
      createdAt
      from {
        id
        userName
        avatar
      }
      to {
        id
      }
      chatRoom {
        id
      }
    }
  }
`;

export const READCOUNT_MESSAGE = gql`
  mutation readcountMessage($chatRoomId: String!) {
    readcountMessage(chatRoomId: $chatRoomId)
  }
`;
