import { ApolloServer, gql } from 'apollo-server';
import resolvers  from './resolvers';
import fs from 'fs';

const typeDefs = gql`${fs.readFileSync('./schema.graphql')}`;
const PORT = process.env.PORT || 9000;

const server: ApolloServer = new ApolloServer({ typeDefs, resolvers });

server
    .listen({port: PORT})
    .then((serverInfo) => console.log(`Server running at ${serverInfo.url}`));