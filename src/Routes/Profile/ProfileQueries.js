import { gql } from "apollo-boost";

export const GET_USER = gql`
  query getUser($userName: String!) {
    getUser(userName: $userName) {
      id
      avatar
      userName
      email
      isSelf
    }
  }
`;

export const ALL_GROUPROOM = gql`
  query allGroupRoom {
    allGroupRoom {
      id
      roomName
      coverPhoto
      createdAt
      founderUser {
        isSelf
        userName
      }
      groupRoomMember {
        id
        participants {
          id
          avatar
          userName
        }
      }
    }
  }
`;

export const LOG_OUT = gql`
  mutation logUserOut {
    logUserOut @client
  }
`;
