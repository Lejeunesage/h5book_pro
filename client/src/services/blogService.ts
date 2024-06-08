import axios from 'axios';

export const API_URL = 'https://yourapi.com';

export const fetchBlogs = async () => {
  try {
    const response = await axios.get(`${API_URL}/blogs`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch blogs');
  }
};

export const fetchBlogById = async (id: number) => {
  try {
    const response = await axios.get(`${API_URL}/blogs/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch blog');
  }
};
