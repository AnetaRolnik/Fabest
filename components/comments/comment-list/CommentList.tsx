import { ObjectId } from "mongodb";
import CommentItem from "../comment-item/CommentItem";

import scss from "./CommentList.module.scss";

type Props = {
  comments: {
    _id: ObjectId;
    author: string;
    comment: string;
  }[];
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
