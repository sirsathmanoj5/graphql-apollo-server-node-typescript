import { newPostByUserIdsDataLoader } from './../dataloaders/dataloader';

const posts = [
    {
        postId: 1,
        title: 'Post1',
        userId: 1
    },
    {
        postId: 2,
        title: 'Post1',
        userId: 1
    },
    {
        postId: 2,
        title: 'Post1',
        userId: 2
    }
]

const getPostById = ({ id }: any, args:any, context: any) => {
    console.log(id);
    return posts.filter((item) => item.userId === id);
}

const getPosts = (parent:any, arags: any, context:any) => {
    return posts
}

const fetchPostByUserIds = async(userIds:any) => {
    return [userIds]
}

export {
    getPostById,
    getPosts,
    fetchPostByUserIds //for dataloader
}