import PostItem from "../post-item/PostItem";

import scss from "./PostsGrid.module.scss";

type Props = {
  posts: {
    id: number;
    slug: string;
    title: string;
    date: string;
    description: string;
    image: string;
  }[];
};

const PostsGrid = (props: Props): JSX.Element => {
  const { posts } = props;

  return (
    <ul className={scss.grid}>
      {posts.map((post) => (
        <PostItem
          key={post.id}
          slug={post.slug}
          title={post.title}
          date={post.date}
          description={post.description}
          image={post.image}
        />
      ))}
    </ul>
  );
};

export default PostsGrid;
