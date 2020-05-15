import { gql } from "apollo-boost";

export const SEARCH_USER = gql`
    query searchUser ($term: String!){
        searchUser (term: $term){
            id
            avatar
            userName
            isSelf
        }
    }
`;
