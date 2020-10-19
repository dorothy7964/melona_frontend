import { gql } from "apollo-boost";

export const CATEGORY_CONTENTSSELF = gql`
    query categoryContentsSelf ($categoryId: String! $anotherPage: Boolean!) {
        categoryContentsSelf (categoryId: $categoryId, anotherPage: $anotherPage) {
            id
            text
            confirmCheck
            confirmProgress
            contentsReqs {
                id
                confirmFile
                confirmCheck
                confirmProgress
                    user {
                        id
                        avatar
                        userName
                    }
            }
            category {
                id
                text
            }
        }
    }
`;


