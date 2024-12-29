"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const mongoose_1 = __importDefault(require("mongoose"));
const isDatabaseConnect = async () => {
    try {
        // await mongoose.connect('mongodb://0.0.0.0:21017/testDatabase');
        await mongoose_1.default.connect('mongodb://127.0.0.1/graphql-apollo-server-node-typescript');
        console.log('Database connected!');
    }
    catch (error) {
        console.log(error);
        throw new graphql_1.GraphQLError('Database not connected!', {
            extensions: {
                code: 'DATABASE_CONNECTION_ISSUE',
            }
        });
    }
};
exports.default = isDatabaseConnect;
