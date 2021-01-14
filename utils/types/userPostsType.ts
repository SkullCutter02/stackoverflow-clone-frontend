type CommentType = {
  uuid: string;
  body: string;
  votes: number;
  createdAt: string;
  updatedAt: string;
};

type CommunityType = {
  uuid: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type UserType = {
  uuid: string;
  username: string;
  email: string;
  verified: boolean;
  reputation: number;
  role: string;
  createdAt: string;
  updatedAt: string;
};

type PostType = {
  uuid: string;
  title: string;
  body: string;
  votes: number;
  createdAt: string;
  updatedAt: string;
  communities: CommunityType[];
  comments: CommentType[];
};

export type UserPostsType = {
  user: UserType;
  posts: PostType[];
  hasMore: boolean;
};
