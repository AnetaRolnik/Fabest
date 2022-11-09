import Link from "next/link";
import Image from "next/image";
import {
  Slug,
  PostTitle,
  PostDate,
  Excerpt,
  PostImage,
  ImageAuthor,
} from "../../../post-types.d";
import scss from "./PostItem.module.scss";

type Props = {
  slug: Slug;
  title: PostTitle;
  date: PostDate;
  excerpt: Excerpt;
  image: PostImage;
  imageAuthor: ImageAuthor;
};

const PostItem = (props: Props): JSX.Element => {
  const { slug, title, date, excerpt, image, imageAuthor } = props;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const linkPath = `/posts/${slug}`;

  return (
    <li className={scss.post}>
      <Link href={linkPath} className={scss.link}>
        <div className={scss.header}>
          <Image
            src={`/images/posts/${slug}/${image}`}
            fill
            alt={title}
            title={imageAuthor}
            className={scss.img}
            sizes="(max-width: 576px) 100vw,
            (max-width: 992px) 50vw,
            33vw"
          />
        </div>
        <div className={scss.content}>
          <h3>{title}</h3>
          <time>{formattedDate}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
};

export default PostItem;
