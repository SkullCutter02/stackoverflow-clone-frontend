type UserType = {
  uuid: string;
  username: string;
  reputation: number;
};

type CommentType = {
  uuid: string;
  body: string;
  votes: number;
  createdAt: string;
  updatedAt: string;
};

type CommunitiesType = {
  name: string;
};

export type QuestionType = {
  uuid: string;
  title: string;
  body: string;
  votes: number;
  createdAt: string;
  updatedAt: string;
  user: UserType;
  comments: CommentType[];
  communities: CommunitiesType[];
  CommunityPost: object;
};

type CommunityType = {
  uuid: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type CommunityPostsType = {
  community: CommunityType;
  posts: QuestionType[];
  hasMore: boolean;
};
