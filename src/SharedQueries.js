import { gql } from "apollo-boost";

// Header, BuyContainer
export const ME = gql`
    query me {
        me {
            userName
        }
    }
`;