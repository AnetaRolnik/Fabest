import ReactMarkdown from "react-markdown";

type Props = {
  content: string;
};

const PostContent = (props: Props): JSX.Element => {
  const { content } = props;
  return <ReactMarkdown>{content}</ReactMarkdown>;
};

export default PostContent;
