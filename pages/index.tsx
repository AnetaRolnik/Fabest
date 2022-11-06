import TopSection from "../components/home-page/top-section/TopSection";
import FeaturedPosts from "../components/home-page/featured-posts/FeaturedPosts";
import { getFeaturedPosts } from "../helpers/posts-util";

type Props = {
  featuredPosts: {
    slug: string;
    title: string;
    date: string;
    image: string;
    imageAuthor: string;
    excerpt: string;
    content: string;
    isFeatured: boolean;
  }[];
};

const HomePage = (props: Props): JSX.Element => {
  return (
    <>
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
