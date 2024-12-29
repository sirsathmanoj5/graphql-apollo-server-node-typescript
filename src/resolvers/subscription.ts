import { PubSub } from 'graphql-subscriptions';
const pubSub = new PubSub();

const subscribe = () => {
    return pubSub.asyncIterableIterator(['NEW_MESSAGE']);
}

export default subscribe;