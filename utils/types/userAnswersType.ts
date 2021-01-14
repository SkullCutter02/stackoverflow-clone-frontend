import { UserType } from "./userPostsType";

type PostType = {
  uuid: string;
  title: string;
  body: string;
  votes: number;
  createdAt: string;
  updatedAt: string;
};

type CommentType = {
  uuid: string;
  body: string;
  votes: number;
  createdAt: string;
  updatedAt: string;
  post: PostType;
};

export type UserAnswersType = {
  user: UserType;
  comments: CommentType[];
  hasMore: boolean;
};
