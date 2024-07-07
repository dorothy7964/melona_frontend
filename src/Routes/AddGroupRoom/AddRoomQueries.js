import { gql } from "apollo-boost";

export const CREATE_GROUPROOM = gql`
  mutation createGroupRoom(
    $coverPhoto: String
    $roomName: String!
    $userName: [String!]!
  ) {
    createGroupRoom(
      coverPhoto: $coverPhoto
      roomName: $roomName
      userName: $userName
    )
  }
`;

export const SEE_FOLLOWING = gql`
  query seeFollowing {
    seeFollowing {
      id
      avatar
      userName
    }
  }
`;
