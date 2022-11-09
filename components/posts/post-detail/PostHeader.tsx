import Hero from "../../layout/hero/Hero";
import { PostTitle, PostImage, ImageAuthor, Slug } from "../../../post-types.d";
import scss from "./PostHeader.module.scss";

type Props = {
  title: PostTitle;
  img: PostImage;
  imgAuthor: ImageAuthor;
  slug: Slug;
};

const PostHeader = (props: Props): JSX.Element => {
  const { title, img, imgAuthor, slug } = props;

  return (
    <Hero
      heading={<h1 className={scss.title}>{title}</h1>}
      srcImg={`/images/posts/${slug}/${img}`}
      altImg={title}
      titleImg={imgAuthor}
    />
  );
};

export default PostHeader;
