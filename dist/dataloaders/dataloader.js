"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newPostByUserIdsDataLoader = void 0;
const dataloader_1 = __importDefault(require("dataloader"));
const posts_1 = require("./../resolvers/posts");
const newPostByUserIdsDataLoader = () => {
    const userDataLoader = new dataloader_1.default((keys) => (0, posts_1.fetchPostByUserIds)(keys));
    return userDataLoader;
};
exports.newPostByUserIdsDataLoader = newPostByUserIdsDataLoader;
