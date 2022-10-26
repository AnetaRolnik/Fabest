import Hero from "../components/home-page/hero/Hero";
import FeaturedPosts from "../components/home-page/featured-posts/FeaturedPosts";

const DUMMY_POSTS = [
  {
    id: 1,
    slug: "sample-example",
    title: "Sample example",
    date: "2022-02-10",
    description: "Sample description",
    image: "/images/logo-white.svg",
  },
  {
    id: 2,
    slug: "sample-example-2",
    title: "Sample example 2",
    date: "2022-05-09",
    description: "Sample description 2",
    image: "/images/logo-white.svg",
  },
  {
    id: 3,
    slug: "sample-example-3",
    title: "Sample example 3",
    date: "2022-01-01",
    description: "Sample description 3",
    image: "/images/logo-white.svg",
  },
  {
    id: 4,
    slug: "sample-example-4",
    title: "Sample example 4",
    date: "2021-05-09",
    description: "Sample description 4",
    image: "/images/logo-white.svg",
  },
];

const HomePage = (): JSX.Element => {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
};

export default HomePage;
