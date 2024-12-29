"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("./users");
const posts_1 = require("./posts");
const subscription_1 = __importDefault(require("./subscription"));
const resolvers = {
    Query: {
        getUsers: users_1.getUsers,
        getUserById: users_1.getUserById
    },
    Subscription: {
        newMessage: subscription_1.default
    },
    User: {
        posts: posts_1.getPostById
    }
};
exports.default = resolvers;
