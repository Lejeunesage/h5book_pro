import { useEffect, useState } from 'react';
import { getSocialNetworkPosts } from '../services/socialNetworkService';
import { SocialNetworkPostModel } from '../models/SocialNetworkPostModel';

export const useSocialNetwork = () => {
  const [posts, setPosts] = useState<SocialNetworkPostModel[]>([]);

  useEffect(() => {
    fetchSocialNetworkPosts();
  }, []);

  const fetchSocialNetworkPosts = async () => {
    const postsData = await getSocialNetworkPosts();
    setPosts(postsData);
  }

  return { posts };
};
