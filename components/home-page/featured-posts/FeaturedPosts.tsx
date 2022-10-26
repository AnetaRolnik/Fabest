import Container from "../../layout/container/Container";
import PostsGrid from "../../posts/posts-grid/PostsGrid";

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

const FeaturedPosts = (props: Props): JSX.Element => {
  const { posts } = props;

  return (
    <Container>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </Container>
  );
};

export default FeaturedPosts;
