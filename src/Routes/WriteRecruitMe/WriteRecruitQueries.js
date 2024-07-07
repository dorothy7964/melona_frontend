import { gql } from "apollo-boost";

export const CREATE_BUYME = gql`
  mutation createBuyMe(
    $location: String!
    $lastDate: String!
    $categoryText: String!
    $contentText: String!
  ) {
    createBuyMe(
      location: $location
      lastDate: $lastDate
      categoryText: $categoryText
      contentText: $contentText
    ) {
      id
      text
      category {
        id
        text
        post {
          id
        }
      }
    }
  }
`;

export const CONNECT_CONTENTS = gql`
  mutation coonnectContents($text: String!, $categoryId: String!) {
    coonnectContents(text: $text, categoryId: $categoryId)
  }
`;

export const CREATE_CONTENTS = gql`
  mutation createContents(
    $postId: String!
    $categoryText: String!
    $contentText: String!
  ) {
    createContents(
      postId: $postId
      categoryText: $categoryText
      contentText: $contentText
    ) {
      id
      text
      category {
        id
      }
    }
  }
`;
