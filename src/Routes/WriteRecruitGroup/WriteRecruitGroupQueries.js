import { gql } from "apollo-boost";

export const CREATE_BUY_GROUP = gql`
  mutation createBuyGroup(
    $groupRoomId: String!
    $location: String!
    $lastDate: String!
    $categoryText: [String!]!
  ) {
    createBuyGroup(
      groupRoomId: $groupRoomId
      location: $location
      lastDate: $lastDate
      categoryText: $categoryText
    )
  }
`;
