import { gql } from "apollo-boost";

export const PROGRESS_APPLYME = gql`
    mutation progressApplyMe ($postId: String!) {
        progressApplyMe (postId: $postId)
    }
`;