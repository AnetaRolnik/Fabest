import ReactMarkdown from "react-markdown";
import Image from "next/image";

import Container from "../../layout/container/Container";
import scss from "./PostContent.module.scss";

type Props = {
  content: string;
  slug: string;
};

const PostContent = (props: Props): JSX.Element => {
  const { content, slug } = props;

  const customComponent = {
    p(paragraph: any) {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = node.children[0];

        return (
          <div className={scss.imgWrapper}>
            <Image
              src={`/images/posts/${slug}/${image.properties.src}`}
              alt={image.alt}
              title={image.title}
              width={600}
              height={400}
              className={scss.img}
            />
          </div>
        );
      }
      return <p className={scss.paragraph}>{paragraph.children}</p>;
    },
  };

  return (
    <Container className={scss.content}>
      <ReactMarkdown components={customComponent}>{content}</ReactMarkdown>
    </Container>
  );
};

export default PostContent;
