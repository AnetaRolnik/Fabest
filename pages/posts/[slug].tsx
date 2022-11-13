import Head from "next/head";

import PostHeader from "../../components/posts/post-detail/PostHeader";
import PostContent from "../../components/posts/post-detail/PostContent";
import { getPostData, getPostsFiles } from "../../helpers/posts-util";
import { PostDetails, Slug } from "../../types/post";
import Container from "../../components/layout/container/Container";
import Comments from "../../components/comments/Comments";

type Props = {
  post: PostDetails;
};

const SinglePostPage = (props: Props): JSX.Element => {
  const { title, image, excerpt, imageAuthor, content, slug } = props.post;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={excerpt} />
      </Head>
      <PostHeader
        title={title}
        image={image}
        imageAuthor={imageAuthor}
        slug={slug}
      />
      <Container>
        <PostContent content={content} slug={slug} />
        <Comments slug={slug} />
      </Container>
    </>
  );
};

export const getStaticProps = (context: { params: { slug: Slug } }) => {
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

  const slugs: Slug[] = postFilenames.map((filename) =>
    filename.replace(/\.md$/, "")
  );

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
};

export default SinglePostPage;
