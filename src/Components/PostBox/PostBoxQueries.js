import { gql } from "apollo-boost";

export const DELETE_CONTENTS = gql`
    mutation deleteContents ($postId: String!) {
        deleteContents (postId: $postId)
    }
`;

export const UNCONNECT_CONTENTSREQ = gql`
    mutation unConnectContentsReq ($postId: String!) {
        unConnectContentsReq (postId: $postId)
    }
`;

export const CONNECT_APPLY = gql`
    mutation connectApply ($postId: String!) {
        connectApply (postId: $postId)
    }
`;