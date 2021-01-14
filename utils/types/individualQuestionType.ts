export type CommentType = {
  uuid: string;
  body: string;
  votes: number;
  createdAt: string;
  updatedAt: string;
  user: UserType;
};

export type CommunityType = {
  uuid: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type UserType = {
  uuid: string;
  username: string;
  reputation: number;
};

export type QuestionType = {
  uuid: string;
  title: string;
  body: string;
  votes: number;
  createdAt: string;
  updatedAt: string;
  user: UserType;
  communities: CommunityType[];
  comments: CommentType[];
};
