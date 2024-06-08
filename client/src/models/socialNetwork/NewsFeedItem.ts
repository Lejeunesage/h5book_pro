export interface Reply {
  id: number;
  author: string;
  authorImage: string;
  content: string;
}

export interface Comment {
  id: number;
  author: string;
  authorImage: string;
  content: string;
  replies: Reply[];
}

export interface NewsFeedItem {
  id: number;
  author: string;
  authorImage: string;
  title: string;
  content: string;
  imageUrl: string;
  comments: Comment[];
}
