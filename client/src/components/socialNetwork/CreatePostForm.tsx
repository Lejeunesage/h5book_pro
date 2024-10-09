import React, { useState } from 'react';
import { User } from '../../models/socialNetwork/User';

interface CreatePostFormProps {
  user: User;
}

const CreatePostForm: React.FC<CreatePostFormProps> = ({ user }) => {
  const [postContent, setPostContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Post submitted:', postContent);
    setPostContent('');
  };

  return (
    <div className="bg-white dark:bg-bs-dark p-4 rounded-lg shadow-lg">
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full p-2 mb-4 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          placeholder={`What's on your mind, ${user.name}?`}
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-lg w-full"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default CreatePostForm;
