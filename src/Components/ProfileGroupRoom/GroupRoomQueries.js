import { gql } from "apollo-boost";

export const ALL_GROUPROOM = gql`
  query allGroupRoom {
    allGroupRoom {
      id
      roomName
      participants
    }
  }
`;
