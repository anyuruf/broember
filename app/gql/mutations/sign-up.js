import { gql } from 'glimmer-apollo';

export const SIGN_UP = gql`
  mutation signUp(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $role: String
    $memAnchor: ID
  ) {
    signUp(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      role: $role
      memAnchor: $memAnchor
    ) {
      token
    }
  }
`;
