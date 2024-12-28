"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const resolvers_1 = __importDefault(require("./resolvers"));
const fs_1 = __importDefault(require("fs"));
const typeDefs = (0, apollo_server_1.gql) `${fs_1.default.readFileSync('./schema.graphql')}`;
const PORT = process.env.PORT || 9000;
const server = new apollo_server_1.ApolloServer({ typeDefs, resolvers: resolvers_1.default });
server
    .listen({ port: PORT })
    .then((serverInfo) => console.log(`Server running at ${serverInfo.url}`));
