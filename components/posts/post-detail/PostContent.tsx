import ReactMarkdown from "react-markdown";
import Image from "next/image";

import Container from "../../layout/container/Container";
import { Slug, Content } from "../../../types/post";
import scss from "./PostContent.module.scss";

type Props = {
  content: Content;
  slug: Slug;
};

const PostContent = (props: Props): JSX.Element => {
  const { content, slug } = props;

  const customComponent = {
    p(paragraph: { children?: any; node?: any }) {
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
    <ReactMarkdown className={scss.content} components={customComponent}>
      {content}
    </ReactMarkdown>
  );
};

export default PostContent;
