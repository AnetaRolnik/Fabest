import Link from "next/link";
import Image from "next/image";

import scss from "./PostItem.module.scss";

type Props = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
};

const PostItem = (props: Props): JSX.Element => {
  const { slug, title, date, excerpt, image } = props;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const linkPath = `/posts/${slug}`;

  console.log(slug);

  return (
    <li className={scss.post}>
      <Link href={linkPath} className={scss.link}>
        <div className={scss.header}>
          <Image
            src={`/images/${slug}/${image}`}
            fill
            alt={title}
            className={scss.img}
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
