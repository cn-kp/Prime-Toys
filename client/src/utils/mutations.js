import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      username
    }
  }
}
`;

export const ADD_TOY = gql`
mutation AddToy($input: addToy) {
  addToy(input: $input) {
    _id
    name
    description
    image
    category {
      _id
    }
  }
}
`