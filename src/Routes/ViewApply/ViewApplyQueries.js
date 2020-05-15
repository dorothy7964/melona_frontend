import { gql } from "apollo-boost";

export const DELETE_POST = gql`
    mutation deletePost ($postId: String!) {
        deletePost (postId: $postId)
    }
`;

export const TOGGLE_VIEWAPPLY = gql`
    mutation toggleViewApply ($postId: String!) {
        toggleViewApply (postId: $postId)
    }
`;


