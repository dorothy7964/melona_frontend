import { gql } from "apollo-boost";

export const SEEBUYME_GROUP = gql`
  query seeBuyMeGroup($groupRoomId: String!, $items: Int, $pageNumber: Int) {
    seeBuyMeGroup(
      groupRoomId: $groupRoomId
      items: $items
      pageNumber: $pageNumber
    ) {
      id
      location
      lastDate
      isApply
      isApplyWait
      isApplyReadCheck
      applysCount
      commentCount
      viewApply
      anotherPage
      applys {
        id
        apply
        readCheck
        user {
          userName
          avatar
        }
      }
      user {
        userName
        avatar
        isSelf
      }
      categorys {
        id
        text
        contents {
          id
          text
          check
        }
      }
    }
  }
`;
