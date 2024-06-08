import React from "react";
import BlogList from "../components/blog/BlogList";
import Layout from "../components/layout/Layout";

const BlogPage: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-8">Blog</h1>
        <BlogList />
      </div>
    </Layout>
  );
};

export default BlogPage;
