import { gql } from "apollo-boost";

export const TOGGLE_POSTEDREQ = gql`
  query togglePostedReqGroup($groupRoomId: String!, $tab: String!) {
    togglePostedReqGroup(groupRoomId: $groupRoomId, tab: $tab) {
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
