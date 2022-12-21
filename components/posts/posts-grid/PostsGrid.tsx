import PostItem from "../post-item/PostItem";

import { Posts } from "../../../types/post";
import scss from "./PostsGrid.module.scss";

type Props = {
  posts: Posts;
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
          tag={post.tag}
        />
      ))}
    </ul>
  );
};

export default PostsGrid;
