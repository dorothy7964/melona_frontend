import { gql } from "apollo-boost";

export const SEARCH_POST_GROUP = gql`
    query searchPostGroup ($term: String! $groupRoomId: String!) {
        searchPostGroup (term: $term, groupRoomId: $groupRoomId) {
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
            }
        }
    }
`;
