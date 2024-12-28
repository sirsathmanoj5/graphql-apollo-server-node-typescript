import { getUsers } from './user';

const resolvers = {
    Query: {
        users: getUsers
    }
}

export default resolvers;