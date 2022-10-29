import Image from "next/image";

type Props = {
  title: string;
  image: string;
};

const PostHeader = (props: Props): JSX.Element => {
  const { title, image } = props;

  return (
    <>
      <h1>{title}</h1>
      <Image src={image} width={300} height={300} alt={title} />
    </>
  );
};

export default PostHeader;
