export type UserType = {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  image: string | " ";
};

export type PostType = {
  id: string;
  createdAt: string;
  slug: string;
  title: string;
  desc: string;
  img: null | string;
  views: Number;
  catSlug: string;
  userEmail: string;
  user: UserType;
};

export type CommentType = {
  id: string;
  createdAt: string;
  desc: string;
  userEmail: string;
  user: UserType;
  postSlug: string;
  post: PostType;
};
