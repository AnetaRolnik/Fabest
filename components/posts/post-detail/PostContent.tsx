import ReactMarkdown from "react-markdown";

import Container from "../../layout/container/Container";

type Props = {
  content: string;
};

const PostContent = (props: Props): JSX.Element => {
  const { content } = props;
  return (
    <Container>
      <ReactMarkdown>{content}</ReactMarkdown>
    </Container>
  );
};

export default PostContent;
