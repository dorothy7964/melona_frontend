import { gql } from "apollo-boost";

export const SEEBUY_GROUP = gql`
    query seeBuyGroup ($groupRoomId: String!) {
        seeBuyGroup (groupRoomId: $groupRoomId) {
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
