export type Slug = string;
export type Content = string;
export type PostTitle = string;
export type PostImage = string;
export type ImageAuthor = string;
export type Excerpt = string;
export type PostDate = string;

export type PostHeader = {
  image: PostImage;
  imageAuthor: ImageAuthor;
  title: PostTitle;
  slug: Slug;
};

export type PostItem = PostHeader & {
  date: PostDate;
  excerpt: Excerpt;
};

export type PostDetails = PostHeader & {
  excerpt: Excerpt;
  content: Content;
  slug: Slug;
};

export type Post = {
  slug: Slug;
  title: PostTitle;
  date: PostDate;
  image: PostImage;
  imageAuthor: ImageAuthor;
  excerpt: Excerpt;
  content: Content;
  isFeatured: boolean;
};

export type Posts = Post[];
