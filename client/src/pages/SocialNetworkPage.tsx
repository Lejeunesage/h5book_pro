import React, { useState, useEffect } from "react";
import Layout from "../components/layout/Layout";
import ProfileCard from "../components/socialNetwork/ProfileCard";
import SuggestionCard from "../components/socialNetwork/SuggestionCard";
import LikedPageCard from "../components/socialNetwork/LikedPageCard";
import StoriesList from "../components/socialNetwork/StoriesList.tsx";
import CreatePostForm from "../components/socialNetwork/CreatePostForm";
import NewsFeedList from "../components/socialNetwork/NewsFeedList.tsx";
import GalleryCard from "../components/socialNetwork//GalleryCard";
import EventCard from "../components/socialNetwork/EventCard";
import GameCard from "../components/socialNetwork/GameCard";
import FriendList from "../components/socialNetwork/FriendList";

import { user, suggestions, likedPages, newsFeedItems, stories, photos, events, games, friends } from '../data/dummyData.ts';

const SocialNetworkPage: React.FC = () => {
  return (
    <Layout>
      <div className="flex flex-col min-h-screen lg:flex-row">
  

        {/* Second Column: Profile, Suggestions, Liked Pages */}
        <div className="order-2 lg:order-none flex-1 lg:flex-1 lg:basis-2/6 space-y-4 p-4 hidden lg:block">
          <ProfileCard user={user} />
          <SuggestionCard suggestions={suggestions} />
          <LikedPageCard likedPages={likedPages} />
        </div>

        {/* Third Column: Create Post Form, Status List */}
        <div className="order-3 lg:order-none flex-2 lg:flex-1 lg:basis-4/6 space-y-4 p-4">
        <StoriesList stories={stories} />
          <CreatePostForm user={user} />
          {newsFeedItems && newsFeedItems.length > 0 && <NewsFeedList newsFeedItems={newsFeedItems} />}
        </div>

        {/* Fourth Column: Gallery, Events, Games */}
        <div className="order-4 lg:order-none flex-1 lg:flex-1 lg:basis-2/6 space-y-4 p-4 hidden lg:block">
          <GalleryCard photos={photos} />
          <EventCard events={events} />
          <GameCard games={games} />
        </div>
        
        {/* Fifth Column: Friend List */}
        <div className="order-5 lg:order-none flex-1 lg:flex-1 lg:basis-2/6 space-y-4 p-4 hidden lg:block">
          <FriendList friends={friends} />
        </div>
      </div>
    </Layout>
  );
};

export default SocialNetworkPage;