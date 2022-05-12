const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }
  type Toy {
    _id: ID
    name: String
    description: String
    image: String
    category: Category
  }
  type User {
    _id: ID
    username: String
    email: String
    listings: [Toy]
  }
  type Auth {
    token: ID
    user: User
  }
  type Query {
    categories: [Category]
    toys(category: ID, name: String): [Toy]
    user: User
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    updateUser(username: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
    addToys(name: String!, description: String, image: String): Toy
  }
`;

module.exports = typeDefs;
