"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = exports.getUsers = exports.addUser = void 0;
const graphql_subscriptions_1 = require("graphql-subscriptions");
const pubSub = new graphql_subscriptions_1.PubSub();
const addUser = (parent, args, context) => {
    const body = args.input.body;
};
exports.addUser = addUser;
const getUserById = (parent, args, context) => {
    const body = args.input.body;
};
exports.getUserById = getUserById;
const getUsers = (parent, args, context) => {
    pubSub.publish('NEW_MESSAGE', { newMessage: { id: 1, content: 'Hello!' } });
    const users = [
        {
            id: 1,
            name: 'User1',
            email: 'user1@gmail.com'
        },
        {
            id: 2,
            name: 'User2',
            email: 'user2@gmail.com'
        }
    ];
    return users;
};
exports.getUsers = getUsers;
