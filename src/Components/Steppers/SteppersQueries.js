import { gql } from "apollo-boost";

export const PROGRESS_NUM = gql`
    mutation progressNum ($contentId: String! $stepNum: Int! $anotherPage: Boolean!) {
        progressNum (contentId: $contentId, stepNum: $stepNum, anotherPage: $anotherPage)
    }
`;