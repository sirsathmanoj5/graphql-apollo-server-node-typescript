import { createServer } from 'http';
import { makeExecutableSchema } from '@graphql-tools/schema'
import { useServer } from 'graphql-ws/lib/use/ws';
import { WebSocketServer } from 'ws';



const server = createServer();
const schema = makeExecutableSchema({ typeDefs:``, resolvers:{}});

const wsServer = new WebSocketServer({ server });

useServer({ schema}, wsServer);
