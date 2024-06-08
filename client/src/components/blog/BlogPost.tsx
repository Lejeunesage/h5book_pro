import React from 'react';
import { useParams } from 'react-router-dom';
import { useBlog } from '../../hooks/useBlog';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const blogId = parseInt(id, 10);
  const { blog, loading, error } = useBlog(blogId);

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">{error}</div>;
  }

  if (!blog) {
    return <div className="text-center py-10">Blog not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <div className="text-gray-500 mb-6">
        By {blog.author} on {new Date(blog.publishedDate).toLocaleDateString()}
      </div>
      <div className="text-lg leading-relaxed">{blog.content}</div>
    </div>
  );
};

export default BlogPost;
