import { gql } from "apollo-boost";

export const PROGRESS_NUM = gql`
  mutation progressNum(
    $contentId: String!
    $stepNum: Int!
    $anotherPage: Boolean!
  ) {
    progressNum(
      contentId: $contentId
      stepNum: $stepNum
      anotherPage: $anotherPage
    )
  }
`;

export const EDIT_CONFIRMFILE = gql`
  mutation editConfirmFile(
    $contentId: String!
    $confirmFile: String!
    $anotherPage: Boolean!
  ) {
    editConfirmFile(
      contentId: $contentId
      confirmFile: $confirmFile
      anotherPage: $anotherPage
    )
  }
`;
