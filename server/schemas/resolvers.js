const { AuthenticationError } = require('apollo-server-express');
const { User, Toy, Category } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return await User.find();
    },
    categories: async () => {
      return await Category.find();
    },
    toys: async () => {
      return await Toy.find();
    },
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      // return user;
      // //  Disabling this part of mutation until JWT authentication is setup.
        const token = signToken(user);
        return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addToys: async (parent, args, context) => {
      if (context.user) {
        const toys = await Toys.create({ args });
      }
    },
  },
};

module.exports = resolvers;
