import { gql } from "apollo-boost";

export const SEE_BUY = gql`
  query seeBuy($items: Int, $pageNumber: Int) {
    seeBuy(items: $items, pageNumber: $pageNumber) {
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
      }
    }
  }
`;
