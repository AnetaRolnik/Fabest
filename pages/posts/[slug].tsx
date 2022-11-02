import Container from "../../components/layout/container/Container";
import PostHeader from "../../components/posts/post-detail/PostHeader";
import PostContent from "../../components/posts/post-detail/PostContent";
import { getPostData, getPostsFiles } from "../../helpers/posts-util";

type Props = {
  post: {
    title: string;
    image: string;
    content: string;
  };
};

const SinglePostPage = (props: Props): JSX.Element => {
  const { title, image, content } = props.post;

  return (
    <Container>
      <PostHeader title={title} image={image} />
      <PostContent content={content} />
    </Container>
  );
};

export const getStaticProps = (context: { params: { slug: string } }) => {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
  };
};

export const getStaticPaths = () => {
  const postFilenames = getPostsFiles();

  const slugs: string[] = postFilenames.map((filename) =>
    filename.replace(/\.md$/, "")
  );

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
};

export default SinglePostPage;
