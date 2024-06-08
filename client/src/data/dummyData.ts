import { User } from '../models/socialNetwork/User';
import { Photo } from '../models/socialNetwork/Photo';
import { Event } from '../models/socialNetwork/Event';
import { Game } from '../models/socialNetwork/Game';
import { NewsFeedItem } from '../models/socialNetwork/NewsFeedItem';

import { User } from '../models/socialNetwork/User';
import { NewsFeedItem, Comment, Reply } from '../models/socialNetwork/NewsFeedItem';

export const user: User = {
    id: 1,
    name: 'John Doe',
    bio: 'Loving life and coding!',
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
  { id: 1, name: 'React Lovers', description: 'A page for React enthusiasts.' },
  { id: 2, name: 'JavaScript Devs', description: 'All about JavaScript.' }
];

export const stories = [
    { id: 1, user, content: 'This is a status update!', createdAt: '2 hours ago' , media: 'https://cdn.leonardo.ai/users/ad68d04b-7790-4e00-ad49-000842234046/generations/9960e2c1-9290-4a02-b5e3-40a32fcabbef/variations/Default_Full_body_128k_Bluray_Extreme_UHD_4K_high_quality_imag_3_9960e2c1-9290-4a02-b5e3-40a32fcabbef_0.jpg?w=512' },
    { id: 2, user, content: 'Another update!', createdAt: '1 hour ago', media: 'https://cdn.leonardo.ai/users/75de077b-a6b8-4366-a2bd-52e137796d24/generations/8b17ae00-3faa-41c6-b896-becf1ac9ae26/variations/Default_Create_an_illustration_of_a_confident_and_muscular_man_1_8b17ae00-3faa-41c6-b896-becf1ac9ae26_0.jpg?w=512' },
    { id: 3, user, content: 'Checking in from the beach!', createdAt: '3 hours ago', media: 'https://cdn.leonardo.ai/users/cda8f4e2-3c09-4027-9bc5-9c6ed90d5343/generations/810b5ac3-0e2c-499b-a029-18e5c0a261b5/variations/Default_stray_black_cat_running_away_in_the_streets_of_liam_wo_0_810b5ac3-0e2c-499b-a029-18e5c0a261b5_0.jpg?w=512' },
    { id: 4, user, content: 'Had a great workout today!', createdAt: '4 hours ago', media: 'https://cdn.leonardo.ai/users/98ec3651-a245-46c1-9282-92b9a27a8557/generations/d860536e-2fc7-45bd-bf8b-28fee5dffd8a/variations/Default_Create_a_wide_angle_full_body_photograph_a_beautiful_f_0_d860536e-2fc7-45bd-bf8b-28fee5dffd8a_0.jpg?w=512' },
    { id: 5, user, content: 'New blog post is up!', createdAt: '5 hours ago', media: 'https://cdn.leonardo.ai/users/d286feac-2a39-4382-9cd1-d86779f93375/generations/02f277c3-4e21-4865-ae93-9af8e18d3c08/variations/Default_Donald_Trump_as_an_orange_angry_rooster_anthropomorphi_2_02f277c3-4e21-4865-ae93-9af8e18d3c08_0.jpg?w=512' },
    { id: 6, user, content: 'Just finished a meeting.', createdAt: '6 hours ago', media: 'https://cdn.leonardo.ai/users/c25dda5f-b454-45f7-a9a7-75b8939854b0/generations/c0c0f8eb-cd85-40df-97e1-9c45bca778e4/variations/Default_Illustrate_an_electrifying_and_dynamic_scene_where_a_b_1_c0c0f8eb-cd85-40df-97e1-9c45bca778e4_0.jpg?w=512' },
    { id: 7, user, content: 'Trying out a new recipe tonight!', createdAt: '7 hours ago', media: 'https://cdn.leonardo.ai/users/1b3bb13e-dce0-44d6-956a-2e6148fd0c6a/generations/22dc80d1-4d1d-4166-bf32-9094b782dcd6/variations/Default_Cosmic_energy_2_22dc80d1-4d1d-4166-bf32-9094b782dcd6_0.jpg?w=512' },
    { id: 8, user, content: 'Happy weekend, everyone!', createdAt: '8 hours ago', media: 'https://cdn.leonardo.ai/users/fcfeb7ab-37cf-44e0-b53a-53f66397bb40/generations/4e20f231-a7bd-4db3-8e8c-f2398fd4787a/variations/Default_Hailee_Steinfeld_con_baador_negro_de_dos_piezas_corto_0_4e20f231-a7bd-4db3-8e8c-f2398fd4787a_0.jpg?w=512' },
    { id: 9, user, content: 'Can\'t wait for the game tonight!', createdAt: '9 hours ago', media: 'https://cdn.leonardo.ai/users/a5fce01c-510e-4bc3-8d36-124cde3bc44c/generations/9bc9fce9-9ba4-4a7c-a1ea-23a90a9c8fb1/variations/Default_loraKanuUnchouV51_kanu_unchou_loraDOA5LR_Ayane_in_ninj_1_9bc9fce9-9ba4-4a7c-a1ea-23a90a9c8fb1_0.jpg?w=512' },
    { id: 10, user, content: 'Enjoying the sunny weather!', createdAt: '10 hours ago', media: 'https://cdn.leonardo.ai/users/2ffb21bf-d03a-4e6d-9573-5940ecf79575/generations/f8a7dcf0-60b3-4e7a-a904-bf4f1020cab5/variations/Default_Eiffel_Tower_full_moon_behind_glowing_beautiful_night_0_f8a7dcf0-60b3-4e7a-a904-bf4f1020cab5_0.jpg?w=512' },
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
