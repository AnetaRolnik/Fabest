import Hero from "../../layout/hero/Hero";
import scss from "./PostHeader.module.scss";

type Props = {
  title: string;
  img: string;
  imgAuthor: string;
  slug: string;
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
