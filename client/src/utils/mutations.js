import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
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
`;
