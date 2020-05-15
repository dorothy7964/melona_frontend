import { gql } from "apollo-boost";

// ApplyUser
export const TOGGLECHECKCONFIRM_CONTENTS = gql`
    mutation toggleCheckConfirmContents ($contentId: String!) {
        toggleCheckConfirmContents (contentId: $contentId)
    }
`;

// ApplyContent, ( 다른곳에서도 쓰임 )
export const APPLY_CONTENTS = gql`
    query applyContents ($categoryId: String! $userName: String! ) {
        applyContents (categoryId: $categoryId, userName: $userName) {
            id
            text
            confirmCheck
            category {
                text
            }
        }
    }
`;

// ApplyContentSwitch
export const TOGGLECHECK_APPLY = gql`
    mutation toggleReadCheck ($applyId: String!) {
        toggleReadCheck (applyId: $applyId)
    }
`;

// ApplyContentMe
export const VIEW_CONTENTS = gql`
    query viewContents ($categoryId: String! $userName: String!) {
        viewContents (categoryId: $categoryId, userName: $userName) {
            id
            text
            category {
                text
            }
            contentsReqs {
                id
                check
                confirmCheck
                    user {
                        id
                        userName
                    }
            }
        }
    }
`;

// ApplyContentSwitchMe
export const TOGGLECONFIRM_CONTENTREQ = gql`
    mutation toggleConfirmContnetsReq ($contentReqId: String!) {
        toggleConfirmContnetsReq (contentReqId: $contentReqId)
    }
`;