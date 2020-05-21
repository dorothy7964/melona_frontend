import { gql } from "apollo-boost";

export const CATEGORY_CONTENTS = gql`
    query categoryContents ($categoryId: String! $userName: String! $anotherPage: Boolean!) {
        categoryContents (categoryId: $categoryId, userName: $userName, anotherPage: $anotherPage) {
            id
            text
            check
            confirmCheck
            confirmFile
            confirmProgress
            category {
                id
                text
            }
            contentsReqs {
                id
                confirmCheck
                confirmFile
                confirmProgress
                    user {
                        id
                        avatar
                        userName
                    }
            }
        }
    }
`;


