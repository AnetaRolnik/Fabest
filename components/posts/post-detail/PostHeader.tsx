import Hero from "../../layout/hero/Hero";
import { PostHeader } from "../../../types/post";
import scss from "./PostHeader.module.scss";

const PostHeader = (props: PostHeader): JSX.Element => {
  const { title, image, imageAuthor, slug } = props;

  return (
    <Hero
      heading={<h1 className={scss.title}>{title}</h1>}
      srcImg={`/images/posts/${slug}/${image}`}
      altImg={title}
      titleImg={imageAuthor}
    />
  );
};

export default PostHeader;
