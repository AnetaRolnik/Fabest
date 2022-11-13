import { useRouter } from "next/router";

import Container from "../../layout/container/Container";
import PostsGrid from "../../posts/posts-grid/PostsGrid";
import Button from "../../ui/button/Button";
import { Posts } from "../../../types/post";
import scss from "./FeaturedPosts.module.scss";

type Props = {
  posts: Posts;
};

const FeaturedPosts = (props: Props): JSX.Element => {
  const { posts } = props;

  const router = useRouter();

  const showAllPostsHandler = () => {
    router.push("/posts");
  };

  return (
    <Container className={scss.featuredPosts}>
      <h2 className={scss.title}>Featured Posts</h2>
      <PostsGrid posts={posts} />
      <Button onClick={showAllPostsHandler}>All Posts</Button>
    </Container>
  );
};

export default FeaturedPosts;
