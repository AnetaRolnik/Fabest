import Head from "next/head";

import PostHeader from "../../components/posts/post-detail/PostHeader";
import PostContent from "../../components/posts/post-detail/PostContent";
import { getPostData, getPostsFiles } from "../../helpers/posts-util";
import { PostDetails } from "../../post-types.d";
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
      <PostContent content={content} slug={slug} />
      <Comments slug={slug} />
    </>
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
