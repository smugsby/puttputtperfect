const { AuthicationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const { User } = require("../models");

const resolvers = {
    Query: {
        getAllUsers: async () => {
            return User.find({});

        },
        getUser: async (parent, arguement) => {
            return User.findOne({ arguement });

        },
        currentUser: async (parent, arguement, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id })
            }
            else {
                throw new AuthicationError("996")
            }
        }
    },
    //add mutations
    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const newUser = await User.create({ username, email, password });
            const token = signToken(newUser)
            return { token, newUser };
        },
        addRound: async (parent, round, context) => {
            if (context.user) {
                const roundAdd = await User.findOneAndUpdate(
                    { id: context.user_id },
                    { $addToSet: { savedRound: { round } } }
                );
                return roundAdd;
            }
        },
        login: async (parent, { email, password }) => {
            const loginUser = await User.findOne({ email });
            const token = signToken(loginUser)
            return {
                token, loginUser
            };
        },
        deleteRound: async (parent, { id }, context) => {
            if (context.user) {
                const roundGone = await User.findOneAndUpdate(
                    { id: context.user_id },
                    { $pull: { savedRound: { id } } }
                );
                return roundGone;
            }
        },
    }
}

module.exports = resolvers