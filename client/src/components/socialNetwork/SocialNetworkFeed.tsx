import React from 'react';
import { SocialNetworkPostModel } from '../../models/SocialNetworkPostModel';
import SocialNetworkPost from './SocialNetworkPost';

interface SocialNetworkFeedProps {
  posts: SocialNetworkPostModel[];
}

const SocialNetworkFeed: React.FC<SocialNetworkFeedProps> = ({ posts }) => {
  return (
    <div className="social-network-feed">
      <h1>Social Network Feed</h1>
      {posts.map(post => (
        <SocialNetworkPost key={post.id} post={post} />
      ))}
    </div>
  );
}

export default SocialNetworkFeed;
