import React from 'react';
import { SocialNetworkPostModel } from '../../models/SocialNetworkPostModel';

interface SocialNetworkPostProps {
  post: SocialNetworkPostModel;
}


const SocialNetworkPost: React.FC<SocialNetworkPostProps> = ({ post }) => {
  return (
    <div className="social-network-post">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <span>{post.author}</span>
    </div>
  );
}

export default SocialNetworkPost;