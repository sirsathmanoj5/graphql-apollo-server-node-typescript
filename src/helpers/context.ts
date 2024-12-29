
import { GraphQLError } from 'graphql';
import jwt from 'jsonwebtoken'; 

const key = process.env.JWT_PRIVATE_KEY || '';


const getUser = async(token:any) => {
    try {
        if(token) {
            const user = jwt.verify(token, key);
            return user;
        }
    } catch (error) {
        return null;
    }
}
 
const context = async({ req, res }: any) => {
    const token = req.headers.authorization || '';
    // const user = await getUser(token);
    const user = { 
        id: 1,
        name: 'User 1',
        email: 'user1@gmail.com'
    }

    if(!user) {
        throw new GraphQLError('User is not authenticated!', {
            extensions:{
                code: 'UNAUTHENTICATED',
                http: { status: 401 }
            }
        })
    }
    return { user };
}

export default context;