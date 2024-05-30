import React from 'react';
import { UserProfile } from '../../types/socialNetworkTypes';

interface SocialNetworkProfileProps {
  user: UserProfile;
}

const SocialNetworkProfile: React.FC<SocialNetworkProfileProps> = ({ user }) => {
  return (
    <div className="social-network-profile">
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
      <span>{user.location}</span>
    </div>
  );
}

export default SocialNetworkProfile;
