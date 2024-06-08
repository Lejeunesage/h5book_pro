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
      <div className="flex min-h-screen ">
        {/* First Column: Profile, Suggestions, Liked Pages, Weather, News */}
        <div className="flex-1 basis-2/6 space-y-4 p-4">
          <ProfileCard user={user} />
          <SuggestionCard suggestions={suggestions} />
          <LikedPageCard likedPages={likedPages} />
          {/* Add Weather and News components here */}
        </div>

        {/* Second Column: Create Post Form, Status List */}
        <div className="flex-2 basis-3/6 space-y-4 p-4">
          <StoriesList stories={stories} />
          <CreatePostForm user={user} />
          {newsFeedItems && newsFeedItems.length > 0 && <NewsFeedList newsFeedItems={newsFeedItems} />}
        </div>

        {/* Third Column: Gallery, Events, Games */}
        <div className="flex-1 basis-2/6 space-y-4 p-4">
          <GalleryCard photos={photos} />
          <EventCard events={events} />
          <GameCard games={games} />
        </div>
        
        {/* Fourth Column: Friend List */}
        <div className="flex-1 basis-2/6 space-y-4 p-4">
          <FriendList friends={friends} />
        </div>
      </div>
    </Layout>
  );
};

export default SocialNetworkPage;