import { useEffect, useState, useContext } from "react";

import SnackbarContext from "../../store/snackbar-context";
import NewComment from "./new-comment/NewComment";
import CommentList from "./comment-list/CommentList";
import Snackbar from "../ui/snackbar/Snackbar";
import { Slug } from "../../types/post";
import {
  Author,
  Content,
  CommentId,
  CommentContent,
} from "../../types/comment";
import Button from "../ui/button/Button";

type Props = {
  slug: Slug;
};

const Comments = (props: Props): JSX.Element => {
  const { slug } = props;

  const [comments, setComments] = useState<
    { author: Author; comment: Content; postSlug: Slug; _id: CommentId }[]
  >([]);

  const [showButton, setShowButton] = useState(false);

  const snackbarCtx = useContext(SnackbarContext);

  const activeSnackbar = snackbarCtx.snackbar;

  const postsNumberToStart = 5;

  useEffect(() => {
    fetch(`/api/comments/${slug}?limit=${postsNumberToStart}`)
      .then((response) => response.json())
      .then((data) => {
        setComments(data.comments);
        data.postsNumber > postsNumberToStart && setShowButton(true);
      });
  }, [setComments, slug]);

  const addCommentHandler = async (comment: CommentContent) => {
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

  const showAllCommentsHandler = () => {
    fetch(`/api/comments/${slug}?offset=${postsNumberToStart}`)
      .then((response) => response.json())
      .then((data) => {
        setComments((featuredPosts) => [...featuredPosts, ...data.comments]);
        setShowButton(false);
      });
  };

  return (
    <>
      <h2>Comments</h2>
      <NewComment onAddComment={addCommentHandler} />
      <CommentList comments={comments} />
      {showButton && <Button onClick={showAllCommentsHandler}>Show all</Button>}
      {activeSnackbar && (
        <Snackbar
          status={activeSnackbar.status}
          message={activeSnackbar.message}
        />
      )}
    </>
  );
};

export default Comments;
