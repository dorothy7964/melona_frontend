import { gql } from "apollo-boost";

export const CONNECT_CONTNETS = gql`
    mutation coonnectContents ($text: String! $categoryId: String!) {
        coonnectContents (text: $text, categoryId: $categoryId)
    }
`;


