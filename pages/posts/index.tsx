import PostsGrid from "../../components/posts/posts-grid/PostsGrid";
import Container from "../../components/layout/container/Container";

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
  {
    id: 5,
    slug: "sample-example-5",
    title: "Sample example 5",
    date: "2021-05-09",
    description: "Sample description 5",
    image: "/images/logo-white.svg",
  },
  {
    id: 6,
    slug: "sample-example-6",
    title: "Sample example 6",
    date: "2021-05-09",
    description: "Sample description 6",
    image: "/images/logo-white.svg",
  },
];

const AllPostsPage = (): JSX.Element => {
  return (
    <Container isGap={true}>
      <PostsGrid posts={DUMMY_POSTS} />
    </Container>
  );
};

export default AllPostsPage;
