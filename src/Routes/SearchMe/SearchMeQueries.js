import { gql } from "apollo-boost";

export const SEARCHME_POST = gql`
    query searchMePost ($term: String!) {
        searchMePost (term: $term) {
            id
            location
            lastDate
            isApply
            isApplyWait
            isApplyReadCheck
            applysCount
            commentCount
            viewApply
            anotherPage
            applys {
                id
                apply
                readCheck
                user {
                    userName
                    avatar
                }
            }
            user {
                userName
                avatar
                isSelf
           }
            categorys {
                id
                text
                contents {
                    id
                    text
                    check
                }
            }
        }
    }
`;


