import { gql } from "apollo-boost";

export const SEE_GROUPROOM = gql`
  query seeGroupRoom($groupRoomId: String!) {
    seeGroupRoom(groupRoomId: $groupRoomId) {
      id
      roomName
      coverPhoto
      createdAt
      founderUser {
        avatar
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
    me {
      userName
    }
  }
`;

export const EDIT_GROUPROOM = gql`
  mutation editGroupRoom(
    $groupRoomId: String!
    $coverPhoto: String
    $roomName: String
  ) {
    editGroupRoom(
      groupRoomId: $groupRoomId
      coverPhoto: $coverPhoto
      roomName: $roomName
    )
  }
`;

export const ADD_MEMBER = gql`
  mutation addUserMember($groupMemberId: String!, $userNameArr: [String!]!) {
    addUserMember(groupMemberId: $groupMemberId, userNameArr: $userNameArr)
  }
`;

export const DELETE_MEMBER = gql`
  mutation deleteUserMember($groupMemberId: String!, $userNameArr: [String!]!) {
    deleteUserMember(groupMemberId: $groupMemberId, userNameArr: $userNameArr)
  }
`;
