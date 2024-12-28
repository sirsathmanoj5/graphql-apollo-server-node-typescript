"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
const resolvers = {
    Query: {
        users: user_1.getUsers
    }
};
exports.default = resolvers;
