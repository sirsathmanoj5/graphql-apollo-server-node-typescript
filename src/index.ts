import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import * as dotenv from 'dotenv';
import { gql } from 'apollo-server'
import resolvers  from './resolvers';
import fs from 'fs';
import context from './helpers/context';
import isDatabaseConnect from './helpers/database';

dotenv.config()
const typeDefs = gql`${fs.readFileSync('./schema.graphql')}`;
const PORT: number = 9000;

const server = new ApolloServer({
    typeDefs, 
    resolvers,
    includeStacktraceInErrorResponses: false
});

async function serverStart() {
    await isDatabaseConnect();
    return startStandaloneServer(server, {
        listen: { port: PORT },
        context: context
    })
}

serverStart().then((serverInfo) => {
    console.log(`Server listening at: ${serverInfo.url}`)
});