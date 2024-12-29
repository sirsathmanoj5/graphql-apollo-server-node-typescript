import { getUserById, getUsers } from './users';
import { getPostById, getPosts } from './posts';

import subscribe from './subscription';

const resolvers = {
    Query: {
        getUsers,
        getUserById
    },
    Subscription: {
        newMessage: subscribe
    },
    User: {
        posts: getPostById
    }
}

export default resolvers;