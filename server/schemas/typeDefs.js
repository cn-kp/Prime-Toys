const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Categories {
    _id: ID
    name: String
  }
  type Toys {
    _id: ID
    name: String
    description: String
    image: String
  }
  type User {
    _id: ID
    username: String
    email: String
    listing: [Toys]
  }
  type Auth {
    token: ID
    user: User
  }
  type Query {
    categories: [Categories]
    toys(categories: ID, name: String): [Toys]
    user: User
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    updateUser(username: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
