import PostsGrid from "../../components/posts/posts-grid/PostsGrid";
import Container from "../../components/layout/container/Container";
import { getAllPosts } from "../../helpers/posts-util";

type Props = {
  allPosts: {
    slug: string;
    title: string;
    date: string;
    image: string;
    excerpt: string;
    content: string;
    isFeatured: boolean;
  }[];
};

const AllPostsPage = (props: Props): JSX.Element => {
  return (
    <Container>
      <PostsGrid posts={props.allPosts} />
    </Container>
  );
};

export const getStaticProps = () => {
  const allPosts = getAllPosts();

  return {
    props: {
      allPosts,
    },
  };
};

export default AllPostsPage;
