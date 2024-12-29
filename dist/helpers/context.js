"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const key = process.env.JWT_PRIVATE_KEY || '';
const getUser = async (token) => {
    try {
        if (token) {
            const user = jsonwebtoken_1.default.verify(token, key);
            return user;
        }
    }
    catch (error) {
        return null;
    }
};
const context = async ({ req, res }) => {
    const token = req.headers.authorization || '';
    // const user = await getUser(token);
    const user = {
        id: 1,
        name: 'User 1',
        email: 'user1@gmail.com'
    };
    if (!user) {
        throw new graphql_1.GraphQLError('User is not authenticated!', {
            extensions: {
                code: 'UNAUTHENTICATED',
                http: { status: 401 }
            }
        });
    }
    return { user };
};
exports.default = context;
