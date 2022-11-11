import { useEffect, useState } from "react";
import { ObjectId } from "mongodb";

import Container from "../layout/container/Container";
import NewComment from "./new-comment/NewComment";
import CommentList from "./comment-list/CommentList";
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

  useEffect(() => {
    fetch(`/api/comments/${slug}`)
      .then((response) => response.json())
      .then((data) => setComments(data.comments));
  }, [setComments]);

  const addCommentHandler = async (comment: Props) => {
    const response = await fetch(`/api/comments/${slug}`, {
      method: "POST",
      body: JSON.stringify(comment),
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();
    const newComment = data.comment;
    setComments((oldComments) => [newComment, ...oldComments]);
  };

  return (
    <Container>
      <h2>Comments</h2>
      <NewComment onAddComment={addCommentHandler} />
      <CommentList comments={comments} />
    </Container>
  );
};

export default Comments;
