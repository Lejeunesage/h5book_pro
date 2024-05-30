import { SocialNetworkPostModel } from '../models/SocialNetworkPostModel';


export async function getSocialNetworkPosts(): Promise<SocialNetworkPostModel[]> {
  // API call to fetch social network posts
  // For demonstration, returning dummy data
  return [
    { id: 1, title: 'First post', content: 'Content of the first post', author: 'John Doe', createdAt: new Date() },
    { id: 2, title: 'Second post', content: 'Content of the second post', author: 'Jane Smith', createdAt: new Date() },
  ];
}
