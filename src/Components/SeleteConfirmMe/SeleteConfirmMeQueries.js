import { gql } from "apollo-boost";

export const TOGGLE_CONTENTREQ = gql`
  mutation toggleContnetsReq($contentId: String!) {
    toggleContnetsReq(contentId: $contentId)
  }
`;

export const TRUE_APPLY = gql`
  mutation trueApply($postId: String!) {
    trueApply(postId: $postId)
  }
`;
