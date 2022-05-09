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
    category: [Categories]
    toys(categories: ID, name: String): [Toys]
    users: [User]
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): User
    updateUser(username: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
    addToys(name: String!, description: String, image: String): Toys
  }
`;

module.exports = typeDefs;
