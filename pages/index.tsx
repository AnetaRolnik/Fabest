import Head from "next/head";

import TopSection from "../components/home-page/top-section/TopSection";
import FeaturedPosts from "../components/home-page/featured-posts/FeaturedPosts";
import { getFeaturedPosts } from "../helpers/posts-util";
import { Posts } from "../types/post";

type Props = {
  featuredPosts: Posts;
};

const HomePage = (props: Props): JSX.Element => {
  return (
    <>
      <Head>
        <title>Fashion beauty style blog</title>
        <meta
          name="description"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </Head>
      <TopSection />
      <FeaturedPosts posts={props.featuredPosts} />
    </>
  );
};

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      featuredPosts,
    },
  };
};

export default HomePage;
