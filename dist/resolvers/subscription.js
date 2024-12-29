"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_subscriptions_1 = require("graphql-subscriptions");
const pubSub = new graphql_subscriptions_1.PubSub();
const subscribe = () => {
    return pubSub.asyncIterableIterator(['NEW_MESSAGE']);
};
exports.default = subscribe;
