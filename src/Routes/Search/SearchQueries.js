import { gql } from "apollo-boost";

export const SEARCH_POST = gql`
  query searchPost($term: String!) {
    searchPost(term: $term) {
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
