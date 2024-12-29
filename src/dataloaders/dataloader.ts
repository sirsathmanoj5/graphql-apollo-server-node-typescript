import DataLoader from "dataloader";
import { fetchPostByUserIds } from './../resolvers/posts'
 
const newPostByUserIdsDataLoader = () => {
    const userDataLoader = new DataLoader((keys) => fetchPostByUserIds(keys));
    return userDataLoader;
}

export{
    newPostByUserIdsDataLoader
}