export interface Post {
    id: string;
    authorId: string;
    content: string;
    image?: string;
    likes: number;
    dislikes: number;
    comments: Comment[];
  }
  
  export interface Comment {
    id: string;
    postId: string;
    authorId: string;
    content: string;
  }
  