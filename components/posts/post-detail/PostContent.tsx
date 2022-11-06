import ReactMarkdown from "react-markdown";
import Image from "next/image";

import Container from "../../layout/container/Container";

type Props = {
  content: string;
  slug: string;
};

const PostContent = (props: Props): JSX.Element => {
  const { content, slug } = props;

  const customComponent = {
    img: (image: { src?: string; alt?: string; title?: string }) => (
      <Image
        src={`/images/posts/${slug}/${image.src}`}
        alt={image.alt ? image.alt : slug}
        title={image.title ? image.alt : slug}
        width={600}
        height={300}
      />
    ),
  };

  return (
    <Container>
      <ReactMarkdown components={customComponent}>{content}</ReactMarkdown>
    </Container>
  );
};

export default PostContent;
