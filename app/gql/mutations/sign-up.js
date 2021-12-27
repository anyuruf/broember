import { gql } from 'glimmer-apollo';

export const SIGN_UP = gql`
  mutation SignUp(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $role: String
    $memAnchor: ID
  ) {
    signIn(
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
