import UserInterface from '../interfaces/UserInterface';
import PostInterface from '../interfaces/PostInterface';
import UserPostInterface from '../interfaces/UserPostInterface';

export default (users: UserInterface[], posts: PostInterface[]): UserPostInterface[] => {
    return users.map(user => {
        const userPosts = posts.filter(post => post.userId === user.id);
        return {
            id: user.id,
            name: user.name,
            company: user.company.name,
            posts: userPosts,
        };
    });
};
