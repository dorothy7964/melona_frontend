import { gql } from "apollo-boost";

export const SEE_FOLLOWING = gql`
    query seeFollowing {
        seeFollowing {
            id
            avatar
            userName
            isFollowing
        }
    }
`;

export const TOGGLE_FOLLOW = gql`
    mutation toggleFollow ($userName: String!) {
        toggleFollow (userName: $userName) 
    }
`;