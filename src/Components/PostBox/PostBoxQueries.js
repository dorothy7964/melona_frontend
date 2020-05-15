import { gql } from "apollo-boost";

// PostBoxContainer
export const DELETE_CONTENTS = gql`
    mutation deleteContents ($postId: String!) {
        deleteContents (postId: $postId)
    }
`;

// PostBoxContainer
export const UNCONNECT_CONTENTSREQ = gql`
    mutation unConnectContentsReq ($postId: String!) {
        unConnectContentsReq (postId: $postId)
    }
`;