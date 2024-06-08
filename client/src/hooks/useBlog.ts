import { useState, useEffect } from 'react';
import { fetchBlogById } from '../services/blogService';
import { Blog } from '../types/blogTypes';

export const useBlog = (id: number) => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadBlog = async () => {
      try {
        const data = await fetchBlogById(id);
        setBlog(data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch blog');
        setLoading(false);
      }
    };

    loadBlog();
  }, [id]);

  return { blog, loading, error };
};
