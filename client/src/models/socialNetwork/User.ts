export interface User {
  id: number;
  username: string;
  email: string;
  bio: string;
  following: number;
  followers: number;
  profileImageUrl: string;
}