import { gql } from "apollo-boost";

export const LOG_IN = gql`
  mutation confirmPassword($email: String!, $password: String!) {
    confirmPassword(email: $email, password: $password)
  }
`;

export const LOCAL_LOG_IN = gql`
  mutation logUserIn($token: String!) {
    logUserIn(token: $token) @client
  }
`;

export const CREATE_ACCOUNT = gql`
  mutation createAccount(
    $userName: String!
    $email: String!
    $password: String!
  ) {
    createAccount(userName: $userName, email: $email, password: $password)
  }
`;

export const REQUEST_SECRET = gql`
  mutation requestSecret($email: String!) {
    requestSecret(email: $email)
  }
`;
