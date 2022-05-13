import { gql } from '@apollo/client';

export const QUERY_ALL_TOYS = gql`
  query getToys {
    toys {
      _id
      name
      description
      image
      category {
        name
      }
    }
  }
`;
export const QUERY_USER = gql`
  {
    user {
      _id
      username
      email
      listings {
        _id
        name
        description
        image
        category {
          name
        }
      }
    }
  }
`;

export const QUERY_CATEGORY = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_USER_TOYS = gql`
  query getUserToys($user: ID) {
    toy(user: $user) {
      _id
      name
      description
      image
      category {
        name
      }
    }
  }
`;
