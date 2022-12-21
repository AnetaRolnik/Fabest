import fs from "fs";
import path from "path";

import matter from "gray-matter";

import { Slug } from "../types/post";

const postsDirectory = path.join(process.cwd(), "posts");

export const getPostsFiles = () => fs.readdirSync(postsDirectory);

export const getPostData = (postIdentifier: Slug) => {
  const postSlug = postIdentifier.replace(/\.md$/, "");
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    title: data.title,
    date: data.date,
    image: data.image,
    imageAuthor: data.imageAuthor,
    excerpt: data.excerpt,
    isFeatured: data.isFeatured,
    tag: data.tag ?? null,
    content,
  };

  return postData;
};

export const getAllPosts = () => {
  const postFiles = getPostsFiles();

  const allPosts = postFiles.map((postFile) => getPostData(postFile));

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
};

export const getFeaturedPosts = () => {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
};
