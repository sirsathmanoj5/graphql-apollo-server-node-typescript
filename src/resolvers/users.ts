import User from "../models/user";
import { PubSub } from "graphql-subscriptions";
const pubSub = new PubSub();
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
]

const addUser = (parent:any, args:any, context:any) => {
    const body = args.input.body;
};

const getUserById = (parent:any, args:any, context:any) => {
    console.log(args.id)
    return users.find((user) => user.id === parseInt(args.id)) || {}
};

const getUsers = (parent:any, args:any, context:any) => {
    pubSub.publish('NEW_MESSAGE', { newMessage: { id: 1, content: 'Hello!' } });
    
    return users;
}

export {
    addUser,
    getUsers,
    getUserById
}