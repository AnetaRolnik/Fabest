type Props = {
  comment: {
    author: string;
    comment: string;
  };
};

const CommentItem = (props: Props) => {
  const { author, comment } = props.comment;
  return (
    <>
      <div>{author}</div>
      <div>{comment}</div>
    </>
  );
};

export default CommentItem;
