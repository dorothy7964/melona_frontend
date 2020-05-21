import { gql } from "apollo-boost";

export const TOGGLE_POSTEDRES = gql`
    query togglePostedRes (
        $tab: String!
        $items: Int
        $pageNumber: Int
        ) {
        togglePostedRes (
            tab: $tab
            items: $items
            pageNumber: $pageNumber
        ) {
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