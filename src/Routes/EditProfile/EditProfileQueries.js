import { gql } from "apollo-boost";

export const ME = gql`
    query me {
        me {
            id
            avatar
            email
            userName
        }
    }
`;

export const GET_USER = gql`
    query getUser($userName: String!){
        getUser(userName: $userName){
            id
            userName
            email
            avatar
            
        }
    }
`;

export const EDIT_USER = gql`
    mutation editUser ($userName: String $email: String) {
        editUser (userName: $userName, email: $email) {
            id
            userName
            email
        }
    }
`;

export const EDIT_PASSWORD = gql`
    mutation editPassword ($password: String!) {
        editPassword (password: $password)
    }
`;

export const EDIT_AVATAR = gql`
    mutation editAvatar($avatar: String!) {
        editAvatar( avatar: $avatar ){
            avatar
        }
    }
`;