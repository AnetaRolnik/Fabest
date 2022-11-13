import Head from "next/head";

import PostsGrid from "../../components/posts/posts-grid/PostsGrid";
import Container from "../../components/layout/container/Container";
import { getAllPosts } from "../../helpers/posts-util";
import { Posts } from "../../types/post";

type Props = {
  allPosts: Posts;
};

const AllPostsPage = (props: Props): JSX.Element => {
  return (
    <>
      <Head>
        <title>Fashion beauty style posts</title>
        <meta
          name="description"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </Head>
      <Container>
        <PostsGrid posts={props.allPosts} />
      </Container>
    </>
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
