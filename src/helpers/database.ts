import { GraphQLError } from "graphql";
import mongoose from "mongoose";


const isDatabaseConnect = async() => {
    try {
        // await mongoose.connect('mongodb://0.0.0.0:21017/testDatabase');
        await mongoose.connect('mongodb://127.0.0.1/graphql-apollo-server-node-typescript');
        console.log('Database connected!')
    } catch (error) {
        console.log(error)
        throw new GraphQLError('Database not connected!', {
            extensions: {
                code: 'DATABASE_CONNECTION_ISSUE',
            }
        })
    }
}

export default isDatabaseConnect;