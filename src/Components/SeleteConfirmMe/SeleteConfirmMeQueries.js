import { gql } from "apollo-boost";

export const TOGGLE_CONTENTREQ = gql`
    mutation toggleContnetsReq ($contentId: String!) {
        toggleContnetsReq (contentId: $contentId)
    }
`;