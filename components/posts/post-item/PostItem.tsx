import Link from "next/link";
import Image from "next/image";

import scss from "./PostItem.module.scss";

type Props = {
  slug: string;
  title: string;
  date: string;
  description: string;
  image: string;
};

const PostItem = (props: Props): JSX.Element => {
  const { slug, title, date, description, image } = props;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const linkPath = `/posts/${slug}`;

  return (
    <li className={scss.post}>
      <Link href={linkPath}>
        <div className={scss.postHeader}>
          <Image src={image} width={100} height={80} alt={title} />
        </div>
        <div className={scss.content}>
          <h3>{title}</h3>
          <time>{formattedDate}</time>
          <p>{description}</p>
        </div>
      </Link>
    </li>
  );
};

export default PostItem;
