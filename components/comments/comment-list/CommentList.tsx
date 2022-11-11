import CommentItem from "../comment-item/CommentItem";

type Props = {
  comments: {
    id: string;
    author: string;
    comment: string;
  }[];
};

const CommentList = (props: Props): JSX.Element => {
  const { comments } = props;

  return (
    <div>
      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          comment={{ author: comment.author, comment: comment.comment }}
        />
      ))}
    </div>
  );
};

export default CommentList;
