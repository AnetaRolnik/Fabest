import { useEffect, useState, useContext } from "react";
import { ObjectId } from "mongodb";

import SnackbarContext from "../../store/snackbar-context";
import Container from "../layout/container/Container";
import NewComment from "./new-comment/NewComment";
import CommentList from "./comment-list/CommentList";
import Snackbar from "../ui/snackbar/Snackbar";
import { Slug } from "../../post-types";

type Props = {
  slug: Slug;
  comment: {
    author: string;
    comment: string;
  };
};

const Comments = (props: Props): JSX.Element => {
  const { slug } = props;

  const [comments, setComments] = useState<
    { author: string; comment: string; postSlug: String; _id: ObjectId }[]
  >([]);

  const snackbarCtx = useContext(SnackbarContext);

  const activeSnackbar = snackbarCtx.snackbar;

  useEffect(() => {
    fetch(`/api/comments/${slug}`)
      .then((response) => response.json())
      .then((data) => setComments(data.comments));
  }, [setComments]);

  const addCommentHandler = async (comment: Props) => {
    try {
      const response = await fetch(`/api/comments/${slug}`, {
        method: "POST",
        body: JSON.stringify(comment),
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();

      snackbarCtx.showSnackbar({
        status: "success",
        message: "Comment was successfully added!",
      });

      const newComment = data.comment;
      setComments((oldComments) => [newComment, ...oldComments]);
    } catch (error) {
      snackbarCtx.showSnackbar({
        status: "error",
        message: "Something went wrong, please try again.",
      });
    }
  };

  return (
    <Container>
      <h2>Comments</h2>
      <NewComment onAddComment={addCommentHandler} />
      <CommentList comments={comments} />
      {activeSnackbar && (
        <Snackbar
          status={activeSnackbar.status}
          message={activeSnackbar.message}
        />
      )}
    </Container>
  );
};

export default Comments;
