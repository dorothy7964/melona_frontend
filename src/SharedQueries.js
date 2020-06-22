import { gql } from "apollo-boost";

// Header, BuyContainer
export const ME = gql`
    query me {
        me {
            userName
        }
    }
`;

// DaddyContainer, BuyContainer, ApplyContainer
export const SEE_BUY = gql`
    query seeBuy ($items: Int $pageNumber: Int) {
        seeBuy (items: $items, pageNumber: $pageNumber) {
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

// BuyGroupContainer, ApplyGroupContainer
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

// DaughterContainer
export const SEE_BUYME = gql`
    query seeBuyMe ($items: Int $pageNumber: Int) {
        seeBuyMe (items: $items, pageNumber: $pageNumber) {
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

// ViewApplyContainer, WriteApplyContainer, ProgressContainer
export const SEE_BUY_ONE = gql`
    query seeBuyOne ($postId: String!) {
        seeBuyOne (postId: $postId) {
            id
            location
            lastDate
            isApply
            isApplyWait
            isApplyReadCheck
            applysCount
            applysReadCount
            commentCount
            viewApply
            anotherPage
            groupRoom
            comments {
                id
                text
            }
            applys {
                id
                apply
                readCheck
                progress
                user {
                    userName
                    avatar
                }
            }
            applysRead {
                id
                apply
                readCheck
                progress
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
                    contentsReqs {
                        id
                        check
                        user {
                            userName
                        }
                    }
                }
            }
        }
    }
`;

// TransferListDialogs
export const ADDMEMBER_LIST = gql`
    query addMemberList ($userNameArr: [String!]!) {
        addMemberList (userNameArr: $userNameArr) {
            id
            avatar
            userName
        }
    }
`;

