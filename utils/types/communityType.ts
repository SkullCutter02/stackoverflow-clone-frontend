type PostType = {
  uuid: string;
};

type CommunityType = {
  uuid: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  posts: PostType[];
};

export type CommunitiesType = {
  communities: CommunityType[];
  hasMore: boolean;
};
