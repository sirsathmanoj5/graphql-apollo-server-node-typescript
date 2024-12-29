"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
const dotenv = __importStar(require("dotenv"));
const apollo_server_1 = require("apollo-server");
const resolvers_1 = __importDefault(require("./resolvers"));
const fs_1 = __importDefault(require("fs"));
const context_1 = __importDefault(require("./helpers/context"));
const database_1 = __importDefault(require("./helpers/database"));
dotenv.config();
const typeDefs = (0, apollo_server_1.gql) `${fs_1.default.readFileSync('./schema.graphql')}`;
const PORT = 9000;
const server = new server_1.ApolloServer({
    typeDefs,
    resolvers: resolvers_1.default,
    includeStacktraceInErrorResponses: false
});
async function serverStart() {
    await (0, database_1.default)();
    return (0, standalone_1.startStandaloneServer)(server, {
        listen: { port: PORT },
        context: context_1.default
    });
}
serverStart().then((serverInfo) => {
    console.log(`Server listening at: ${serverInfo.url}`);
});
