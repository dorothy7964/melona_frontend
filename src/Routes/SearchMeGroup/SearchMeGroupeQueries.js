import { gql } from "apollo-boost";

export const SEARCHME_POST_GROUP = gql`
    query searchMePostGroup ($term: String! $groupRoomId: String!) {
        searchMePostGroup (term: $term, groupRoomId: $groupRoomId) {
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


