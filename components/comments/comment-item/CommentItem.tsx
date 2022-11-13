import scss from "./CommentItem.module.scss";

type Props = {
  comment: {
    author: string;
    comment: string;
  };
};

const CommentItem = (props: Props) => {
  const { author, comment } = props.comment;
  return (
    <div className={scss.comment}>
      <div className={scss.author}>{author}</div>
      <div>{comment}</div>
    </div>
  );
};

export default CommentItem;
