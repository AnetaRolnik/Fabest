export type Slug = string;
export type Content = string;
export type PostTitle = string;
export type PostImage = string;
export type ImageAuthor = string;
export type Excerpt = string;
export type PostDate = string;

export type Posts = {
  slug: Slug;
  title: PostTitle;
  date: PostDate;
  image: PostImage;
  imageAuthor: ImageAuthor;
  excerpt: Excerpt;
  content: Content;
  isFeatured: boolean;
}[];
