import { User } from './User';

export interface Story {
  id: number;
  user: User;
  media?: string;
  createdAt: Date;
  expiresAt: Date;
}