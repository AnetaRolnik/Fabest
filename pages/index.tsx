import Hero from "../components/home-page/hero/Hero";
import FeaturedPosts from "../components/home-page/featured-posts/FeaturedPosts";
import { getFeaturedPosts } from "../helpers/posts-util";

type Props = {
  featuredPosts: {
    slug: string;
    title: string;
    date: string;
    image: string;
    excerpt: string;
    content: string;
    isFeatured: boolean;
  }[];
};

const HomePage = (props: Props): JSX.Element => {
  return (
    <>
      <Hero />
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
