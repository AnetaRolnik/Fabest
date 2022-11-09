import Link from "next/link";

import Container from "../../layout/container/Container";
import PostsGrid from "../../posts/posts-grid/PostsGrid";
import { Posts } from "../../../post-types.d";
import scss from "./FeaturedPosts.module.scss";

type Props = {
  posts: Posts;
};

const FeaturedPosts = (props: Props): JSX.Element => {
  const { posts } = props;

  return (
    <Container className={scss.featuredPosts}>
      <h2 className={scss.title}>Featured Posts</h2>
      <PostsGrid posts={posts} />
      <Link href="/posts" className={scss.btn}>
        All Posts
      </Link>
    </Container>
  );
};

export default FeaturedPosts;
