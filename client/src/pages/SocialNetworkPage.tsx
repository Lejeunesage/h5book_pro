import React from "react";
import SocialNetworkFeed from "../components/socialNetwork/SocialNetworkFeed";
import { useSocialNetwork } from "../hooks/useSocialNetwork";
import Layout from "../components/layout/Layout";

const SocialNetworkPage: React.FC = () => {
  const { posts } = useSocialNetwork();

  return (
    <div className="social-network-page">
      <Layout>
        <h1>Social Network Page</h1>
        <SocialNetworkFeed posts={posts} />
      </Layout>
    </div>
  );
};

export default SocialNetworkPage;
