import Container from "../../layout/container/Container";
import PostsGrid from "../../posts/posts-grid/PostsGrid";
import scss from "./FeaturedPosts.module.scss";

type Props = {
  posts: {
    slug: string;
    title: string;
    date: string;
    image: string;
    excerpt: string;
    content: string;
    isFeatured: boolean;
  }[];
};

const FeaturedPosts = (props: Props): JSX.Element => {
  const { posts } = props;

  return (
    <Container>
      <h2 className={scss.title}>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </Container>
  );
};

export default FeaturedPosts;
