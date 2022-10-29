import Container from "../../components/layout/container/Container";
import PostHeader from "../../components/posts/post-detail/PostHeader";
import PostContent from "../../components/posts/post-detail/PostContent";

const DUMMY_POST = {
  id: 1,
  slug: "sample-example",
  title: "Sample example",
  date: "2022-02-10",
  description: "Sample description",
  image: "/images/logo.svg",
  content: "# This is a first post",
};

const SinglePostPage = (): JSX.Element => {
  return (
    <Container>
      <PostHeader title={DUMMY_POST.title} image={DUMMY_POST.image} />
      <PostContent />
    </Container>
  );
};

export default SinglePostPage;
