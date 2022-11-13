import CommentItem from "../comment-item/CommentItem";
import { Comments } from "../../../types/comment";

import scss from "./CommentList.module.scss";

type Props = {
  comments: Comments;
};

const CommentList = (props: Props): JSX.Element => {
  const { comments } = props;

  return (
    <div className={scss.comments}>
      {comments.map((comment) => (
        <CommentItem
          key={comment._id.toString()}
          comment={{ author: comment.author, comment: comment.comment }}
        />
      ))}
    </div>
  );
};

export default CommentList;
