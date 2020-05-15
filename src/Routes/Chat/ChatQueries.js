import { gql } from '@apollo/client';

export const CHATROOMS_QUERY = gql`
    query {
        seeChatRooms {
            id
            lastMessage
            lastMsgTime
            unReadMsgCounter
            participants {
                id
                userName
                avatar
            }
            messages {
                id
                text
                createdAt
            }
        }
        me {
            id
        }
    }
`;

export const READCOUNT_MESSAGE = gql`
    mutation readcountMessage ($chatRoomId: String!){
        readcountMessage (chatRoomId: $chatRoomId)
    }
`;

export const CREATE_CHATROOM = gql`
    mutation createChatRoom ($userName: String!){
        createChatRoom (userName:$userName){
            id
        }
    }
`;

export const DELETE_CHATROOM = gql`
    mutation deleteChatRoom ($chatRoomId: String!){
        deleteChatRoom (chatRoomId:$chatRoomId){
            id
        }
    }
`;
