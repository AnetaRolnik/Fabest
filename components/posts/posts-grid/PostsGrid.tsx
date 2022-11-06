import PostItem from "../post-item/PostItem";

import scss from "./PostsGrid.module.scss";

type Props = {
  posts: {
    slug: string;
    title: string;
    date: string;
    image: string;
    imageAuthor: string;
    excerpt: string;
    content: string;
    isFeatured: boolean;
  }[];
};

const PostsGrid = (props: Props): JSX.Element => {
  const { posts } = props;

  return (
    <ul className={scss.grid}>
      {posts.map((post) => (
        <PostItem
          key={post.slug}
          slug={post.slug}
          title={post.title}
          date={post.date}
          excerpt={post.excerpt}
          image={post.image}
          imageAuthor={post.imageAuthor}
        />
      ))}
    </ul>
  );
};

export default PostsGrid;
