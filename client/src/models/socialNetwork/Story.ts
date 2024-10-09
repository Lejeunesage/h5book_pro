// models/socialNetwork/Story.ts
import { User } from './User';

export interface Media {
  type: 'image' | 'video' | 'text'; 
  url?: string; 
  content?: string;  
  backgroundColor?: string; // Couleur de fond pour le texte
  textColor?: string; // Couleur du texte
  fontFamily?: string; // Police du texte
}

export interface Story {
  id: string;
  user: {
    id: string;
    firstName: string;
    lastName: string;
  };
  mediaList: Media[];  
  createdAt: Date;
}