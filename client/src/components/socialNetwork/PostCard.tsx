import React from 'react';

interface PostCardProps {
  post: any;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="bg-white dark:bg-bs-dark p-4 rounded-lg shadow-lg">
      <div className="flex items-center mb-4">
        <img
          src={post.user.profileImageUrl}
          alt="Profile"
          className="w-10 h-10 rounded-full mr-4"
        />
        <div>
          <h3 className="text-lg font-bold dark:text-white">{post.user.name}</h3>
          <p className="text-gray-600 dark:text-gray-400">{post.createdAt}</p>
        </div>
      </div>
      <p className="text-gray-800 dark:text-gray-300">{post.content}</p>
    </div>
  );
};

export default PostCard;
