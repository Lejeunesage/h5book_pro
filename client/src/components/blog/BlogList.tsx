import React from 'react';
import { Link } from 'react-router-dom';
import { useBlog } from '../../hooks/useBlog';

const BlogList: React.FC = () => {
  const { blogs, loading, error } = useBlog();

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">{error}</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogs.map((blog) => (
        <div key={blog.id} className="border rounded-lg p-4 shadow-md bg-white hover:shadow-lg transition-shadow duration-300 ease-in-out">
          <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
          <p className="text-gray-600 mb-4">{blog.excerpt}</p>
          <div className="flex justify-between items-center text-sm text-gray-500">
            <span>By {blog.author}</span>
            <span>{new Date(blog.publishedDate).toLocaleDateString()}</span>
          </div>
          <Link to={`/blog/${blog.id}`} className="text-blue-500 hover:underline mt-4 block">
            Read More
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
