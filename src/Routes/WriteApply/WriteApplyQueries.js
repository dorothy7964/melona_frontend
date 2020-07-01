import { gql } from "apollo-boost";

export const CONNECT_CONTNETS = gql`
    mutation coonnectContents ($text: String! $categoryId: String!) {
        coonnectContents (text: $text, categoryId: $categoryId)
    }
`;

export const DELETE_CONTENTS = gql`
    mutation deleteContents ($postId: String!) {
        deleteContents (postId: $postId)
    }
`;

export const TRUE_APPLY = gql`
    mutation trueApply ($postId: String!) {
        trueApply (postId: $postId)
    }
`;

export const FALSE_APPLY = gql`
    mutation falseApply ($postId: String!) {
        falseApply (postId: $postId)
    }
`;

export const UNCONNECT_CONTENTSREQ = gql`
    mutation unConnectContentsReq ($postId: String!) {
        unConnectContentsReq (postId: $postId)
    }
`;