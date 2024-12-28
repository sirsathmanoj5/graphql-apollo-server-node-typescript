"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = void 0;
const getUsers = () => {
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
