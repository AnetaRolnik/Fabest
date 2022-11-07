import Head from "next/head";

import PostHeader from "../../components/posts/post-detail/PostHeader";
import PostContent from "../../components/posts/post-detail/PostContent";
import { getPostData, getPostsFiles } from "../../helpers/posts-util";

type Props = {
  post: {
    title: string;
    image: string;
    excerpt: string;
    imageAuthor: string;
    content: string;
  };
  slug: string;
};

const SinglePostPage = (props: Props): JSX.Element => {
  const { slug, post } = props;
  const { title, image, excerpt, imageAuthor, content } = post;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={excerpt} />
      </Head>
      <PostHeader
        title={title}
        img={image}
        imgAuthor={imageAuthor}
        slug={slug}
      />
      <PostContent content={content} slug={slug} />
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
      slug: slug,
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
