import fs from "fs";
import path from "path";

import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

const getPostData = (filename: string) => {
  const filePath = path.join(postsDirectory, filename);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const postSlug = filename.replace(/\.md$/, "");

  const { data, content } = matter(fileContent);
  const { title, date, image, excerpt, isFeatured } = data;

  const postData = {
    slug: postSlug,
    title,
    date,
    image,
    excerpt,
    isFeatured,
    content,
  };

  return postData;
};

export const getAllPosts = () => {
  const postFiles = fs.readdirSync(postsDirectory);

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
