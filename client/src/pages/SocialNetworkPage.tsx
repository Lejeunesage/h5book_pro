import React from "react";
import Layout from "../components/layout/Layout";
import ProfileCard from "../components/socialNetwork/ProfileCard";
import SuggestionCard from "../components/socialNetwork/SuggestionCard";
import LikedPageCard from "../components/socialNetwork/LikedPageCard";
import StoriesList from "../components/socialNetwork/StoriesList";
import CreatePostForm from "../components/socialNetwork/CreatePostForm";
import NewsFeedList from "../components/socialNetwork/NewsFeedList";
import GalleryCard from "../components/socialNetwork/GalleryCard";
import EventCard from "../components/socialNetwork/EventCard";
import GameCard from "../components/socialNetwork/GameCard";
import FriendList from "../components/socialNetwork/FriendList";

import {
  user,
  suggestions,
  likedPages,
  newsFeedItems,
  stories,
  photos,
  events,
  games,
  friends,
} from "../data/dummyData.ts";

const SocialNetworkPage: React.FC = () => {
  return (
    <Layout>
      {/* Bande des stories */}
      <div className="flex w-full justify-evenly gap-8">
        <div className="mb-4 lg:w-9/12">
          <div className="">
            <StoriesList stories={stories} />
          </div>

          {/* Conteneur avec 3 colonnes et liste d'amis à droite */}
          <div className="flex flex-col lg:flex-row justify-between gap-5">
            {/* Colonne gauche */}
            <div className="w-full lg:w-1/4 space-y-4 mb-4">
              <ProfileCard user={user} />
              <SuggestionCard suggestions={suggestions} />
              <LikedPageCard likedPages={likedPages} />
            </div>

            {/* Colonne centrale */}
            <div className="w-full lg:w-2/4 space-y-4 mb-4">
              <CreatePostForm user={user} />
              {newsFeedItems && newsFeedItems.length > 0 && (
                <NewsFeedList newsFeedItems={newsFeedItems} />
              )}
            </div>

            {/* Colonne droite */}
            <div className="w-full lg:w-1/4 space-y-4 mb-4">
              <GalleryCard photos={photos} />
              <EventCard events={events} />
              <GameCard games={games} />
            </div>
          </div>
        </div>

        {/* Liste d'amis à droite en colonne fixe */}
        <div className="sticky top-20 self-start hidden lg:block lg:w-3/12">
          <FriendList friends={friends} />
        </div>
      </div>
    </Layout>
  );
};

export default SocialNetworkPage;
