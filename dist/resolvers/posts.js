"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchPostByUserIds = exports.getPosts = exports.getPostById = void 0;
const posts = [
    {
        postId: 1,
        title: 'Post1',
        userId: 1
    },
    {
        postId: 2,
        title: 'Post1',
        userId: 1
    },
    {
        postId: 2,
        title: 'Post1',
        userId: 2
    }
];
const getPostById = ({ id }, args, context) => {
    console.log(id);
    return posts.filter((item) => item.userId === id);
};
exports.getPostById = getPostById;
const getPosts = (parent, arags, context) => {
    return posts;
};
exports.getPosts = getPosts;
const fetchPostByUserIds = async (userIds) => {
    return [userIds];
};
exports.fetchPostByUserIds = fetchPostByUserIds;
