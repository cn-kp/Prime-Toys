const { AuthenticationError } = require("apollo-server-express");
const { User, Toy, Category } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({populate:"toy"});
        return user;
      }
    },
    categories: async () => {
      return await Category.find();
    },
    toys: async (parent, { category, name }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (name) {
        params.name = {
          $regex: name,
        };
      }

      return await Toy.find(params).populate("category");
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
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
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
