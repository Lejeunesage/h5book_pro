// Comment.tsx
import React from 'react';
import { User } from '../../models/socialNetwork/User';

interface CommentProps {
  author: User;
  content: string;
}

const Comment: React.FC<CommentProps> = ({ author, content }) => {
  return (
    <div className="flex items-center space-x-2">
      <img src={author.profileImageUrl} alt={author.name} className="w-8 h-8 rounded-full" />
      <div>
        <p className="font-semibold">{author.name}</p>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Comment;
