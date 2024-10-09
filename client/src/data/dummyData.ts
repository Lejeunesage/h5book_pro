import { User } from '../models/socialNetwork/User';
import { Photo } from '../models/socialNetwork/Photo';
import { Event } from '../models/socialNetwork/Event';
import { Game } from '../models/socialNetwork/Game';
import { NewsFeedItem } from '../models/socialNetwork/NewsFeedItem';

import { User } from '../models/socialNetwork/User';
import { NewsFeedItem, Comment, Reply } from '../models/socialNetwork/NewsFeedItem';

export const user: User = {
    id: 1,
    username: 'John Doe',
    email: 'johndoe@gmail.com',
    bio: 'Loving life and coding!',
    following: 52,
    followers: 532,
    profileImageUrl: 'https://cdn.leonardo.ai/users/802f37dd-c9b1-4c49-9df7-8483e4db2cda/generations/42b7f810-1af2-47f1-949a-1d674c51daa0/variations/Default_the_boy_with_the_glassesthe_girl_with_middle_long_hair_1_42b7f810-1af2-47f1-949a-1d674c51daa0_0.jpg?w=512'
  };
  
  export const newsFeedItems: NewsFeedItem[] = [
    {
      id: 1,
      author: "John Doe",
      authorImage: "https://cdn.leonardo.ai/users/802f37dd-c9b1-4c49-9df7-8483e4db2cda/generations/42b7f810-1af2-47f1-949a-1d674c51daa0/variations/Default_the_boy_with_the_glassesthe_girl_with_middle_long_hair_1_42b7f810-1af2-47f1-949a-1d674c51daa0_0.jpg?w=512",
      title: "Breaking News!",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "https://cdn.leonardo.ai/users/97fcd589-9681-4981-9839-e8f8a8410fe8/generations/718363c1-2b1b-4f26-9c32-409e67b4d6fb/variations/alchemyrefiner_alchemymagic_2_718363c1-2b1b-4f26-9c32-409e67b4d6fb_0.jpg?w=512",
      comments: [
        {
          id: 1,
          author: "Jane Smith",
          authorImage: "https://cdn.leonardo.ai/users/e3569a17-76c9-4331-9346-28b30e90894d/generations/86b26b68-5893-4f97-861d-8198437f4c18/variations/Default_Draw_a_beautiful_girl_who_is_a_successful_business_wom_1_86b26b68-5893-4f97-861d-8198437f4c18_0.jpg?w=512",
          content: "Great news!",
          replies: [
            {
              id: 1,
              author: "John Doe",
              authorImage: "https://cdn.leonardo.ai/users/802f37dd-c9b1-4c49-9df7-8483e4db2cda/generations/42b7f810-1af2-47f1-949a-1d674c51daa0/variations/Default_the_boy_with_the_glassesthe_girl_with_middle_long_hair_1_42b7f810-1af2-47f1-949a-1d674c51daa0_0.jpg?w=512",
              content: "Thanks!"
            }
          ]
        }
      ]
    }
    // Ajoutez d'autres éléments d'actualité ici
  ];


export const suggestions: User[] = [
  { id: 2, name: 'Jane Smith', bio: 'Coffee lover', profileImageUrl: 'https://cdn.leonardo.ai/users/e3569a17-76c9-4331-9346-28b30e90894d/generations/86b26b68-5893-4f97-861d-8198437f4c18/variations/Default_Draw_a_beautiful_girl_who_is_a_successful_business_wom_1_86b26b68-5893-4f97-861d-8198437f4c18_0.jpg?w=512' },
  { id: 3, name: 'Mike Johnson', bio: 'Travel enthusiast', profileImageUrl: 'https://cdn.leonardo.ai/users/687fcfd0-79db-45da-948a-4caf8519e629/generations/8a787a45-5e27-4b91-a1cc-4e177e625323/variations/Default_High_quality_image_8K_Ultra_HD_woman_bathing_in_the_se_3_8a787a45-5e27-4b91-a1cc-4e177e625323_0.jpg?w=512' }
];

export const likedPages = [
  { id: 1, name: 'Chrimson Agency', description: 'Clothing Store', imageUrl: 'https://cdn.leonardo.ai/users/2e0d1e44-6cf8-453e-ae5b-cf2e51e2b0da/generations/c957d29e-1393-45a5-a9eb-baa355931af6/variations/alchemyrefiner_alchemymagic_1_c957d29e-1393-45a5-a9eb-baa355931af6_0.jpg?w=512', followers: '15k' },
  { id: 2, name: 'Digital Pixel', description: 'Software Company', imageUrl: 'https://cdn.leonardo.ai/users/c38778db-d6fb-4c5e-87c0-c130618e392e/generations/55ba92bb-2b5b-40c4-ad8f-fd110ec3ae6a/variations/alchemyrefiner_alchemymagic_3_55ba92bb-2b5b-40c4-ad8f-fd110ec3ae6a_0.jpg?w=512', followers: '158k' },
  { id: 3, name: 'The Angle Bar', description: 'Disco Bar', imageUrl: 'https://cdn.leonardo.ai/users/61ed95a9-5b40-4c0f-bd4b-2b509b183325/generations/5048c185-c497-4139-803b-76232f56c2db/variations/Default_A_Greek_Stoic_man_made_of_grey_stone_with_cracks_A_ton_0_5048c185-c497-4139-803b-76232f56c2db_0.jpg?w=512', followers: '8k' },
  { id: 4, name: 'Fivestar Food', description: 'Restaurant', imageUrl: 'https://cdn.leonardo.ai/users/dbf1d627-3545-4f18-932d-6ab622402252/generations/ec63d8c8-b237-41be-b726-fb70fb945274/variations/Default_Black_panther_close_up_national_geographic_like_photor_2_ec63d8c8-b237-41be-b726-fb70fb945274_0.jpg?w=512g', followers: '186k' },
  { id: 5, name: 'Royal Watch', description: 'Watch Shop', imageUrl: 'https://cdn.leonardo.ai/users/9a580a0f-d698-4ac5-b0cc-6f7473b5c5d5/generations/3ffc620d-6e59-4068-8538-e7fec58de1ef/variations/Default_A_graceful_floating_2_year_old_water_goddess_Suggested_3_3ffc620d-6e59-4068-8538-e7fec58de1ef_0.jpg?w=512', followers: '65k' },
];


export const stories = [
  {
      id: '1',
      user: { id: 'user1', firstName: 'Alice', lastName: 'Smith' },
      mediaList: [
          { type: 'image', url: 'https://cdn.leonardo.ai/users/2ffb21bf-d03a-4e6d-9573-5940ecf79575/generations/f8a7dcf0-60b3-4e7a-a904-bf4f1020cab5/variations/Default_Eiffel_Tower_full_moon_behind_glowing_beautiful_night_0_f8a7dcf0-60b3-4e7a-a904-bf4f1020cab5_0.jpg?w=512' },
          { type: 'text', content: 'Hello from Alice!', backgroundColor: '#ffcccc', textColor: '#000000', fontFamily: 'Arial' },
          {type: 'image', url: 'https://cdn.leonardo.ai/users/1b3bb13e-dce0-44d6-956a-2e6148fd0c6a/generations/22dc80d1-4d1d-4166-bf32-9094b782dcd6/variations/Default_Cosmic_energy_2_22dc80d1-4d1d-4166-bf32-9094b782dcd6_0.jpg?w=512' },
      ],
      createdAt: new Date(),
  },
  {
      id: '2',
      user: { id: 'user2', firstName: 'Bob', lastName: 'Jones' },
      mediaList: [
        { type: 'text', content: 'This is Bob!', backgroundColor: '#ccffcc', textColor: '#000000', fontFamily: 'Helvetica' },
        { type: 'video', url: 'https://www.tiktok.com/@aysha.siddika.afiya/video/7300943476752010498?is_from_webapp=1&sender_device=pc' },
          { type: 'image', url: 'https://cdn.leonardo.ai/users/1b3bb13e-dce0-44d6-956a-2e6148fd0c6a/generations/22dc80d1-4d1d-4166-bf32-9094b782dcd6/variations/Default_Cosmic_energy_2_22dc80d1-4d1d-4166-bf32-9094b782dcd6_0.jpg?w=512' },
      ],
      createdAt: new Date(),
  },
  {
    id: '3',
    user: { id: 'user3', firstName: 'Charlie', lastName: 'Brown' },
    mediaList: [
      { type: 'image', url: 'https://cdn.leonardo.ai/users/1b3bb13e-dce0-44d6-956a-2e6148fd0c6a/generations/22dc80d1-4d1d-4166-bf32-9094b782dcd6/variations/Default_Cosmic_energy_2_22dc80d1-4d1d-4166-bf32-9094b782dcd6_0.jpg?w=512' },
      { type: 'text', content: 'Check this out!', backgroundColor: '#ccccff', textColor: '#000000', fontFamily: 'Courier New' },
    ],
    createdAt: new Date(),
  },
  // Ajoutez d'autres histoires ici
];


export const photos: Photo[] = [
  { id: 1, url: 'https://cdn.leonardo.ai/users/5c917e6d-4448-41bb-b06a-3c80b3909991/generations/b7f8ed6c-dc1e-40af-b2e2-0bcc9f850096/variations/alchemyrefiner_alchemymagic_1_b7f8ed6c-dc1e-40af-b2e2-0bcc9f850096_0.jpg?w=512', description: 'A nice view' },
  { id: 2, url: 'https://cdn.leonardo.ai/users/fa3fa2d1-0504-469d-a521-046c08765136/generations/1b2a09b9-43ae-4fb1-9894-778be482534e/variations/Default_Gorgeous_rose_pedels_floating_on_large_lake_on_most_co_3_1b2a09b9-43ae-4fb1-9894-778be482534e_0.jpg?w=512', description: 'Another view' }
];

export const events: Event[] = [
  { id: 1, name: 'React Conference', date: '2024-06-15' },
  { id: 2, name: 'JavaScript Meetup', date: '2024-07-10' }
];

export const games: Game[] = [
  { id: 1, name: 'Chess', description: 'A strategy board game' },
  { id: 2, name: 'Soccer', description: 'A popular sport' }
];

export const friends: User[] = [
  { id: 2, name: 'Jane Smith', bio: 'Coffee lover', profileImageUrl: 'https://cdn.leonardo.ai/users/afe04304-a691-4518-85ef-b6dc2ba024f9/generations/759fd355-f245-4166-94a5-717440086456/Default_Present_an_electrifying_and_dynamic_scene_wherein_a_co_1.jpg?w=512' },
  { id: 3, name: 'Mike Johnson', bio: 'Travel enthusiast', profileImageUrl: 'https://cdn.leonardo.ai/users/802f37dd-c9b1-4c49-9df7-8483e4db2cda/generations/e560126d-0589-4d6e-be59-a021d2d6adfa/variations/Default_Draw_a_cartoonstyle_illustration_of_a_guy_carrying_a_l_0_e560126d-0589-4d6e-be59-a021d2d6adfa_0.jpg?w=512' }
];
