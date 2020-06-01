import PostInterface from './PostInterface';
export default interface UserPostInterface {
    id: number;
    name: string;
    company: string;
    posts: PostInterface[];
}
