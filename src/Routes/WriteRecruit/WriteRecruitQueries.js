import { gql } from "apollo-boost";

export const CREATE_BUY = gql`
    mutation createBuy (
        $location: String! 
        $lastDate: String! 
        $categoryText: [String!]!
    ){
        createBuy (
            location: $location, 
            lastDate: $lastDate, 
            categoryText: $categoryText
        )
    }
`;


