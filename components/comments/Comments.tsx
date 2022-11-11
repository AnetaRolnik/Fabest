import { useEffect, useState } from "react";

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
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`/api/comments/${slug}`)
      .then((response) => response.json())
      .then((data) => setComments(data.comments));
  }, [comments]);

  const addCommentHandler = (comment: Props) => {
    fetch(`/api/comments/${slug}`, {
      method: "POST",
      body: JSON.stringify(comment),
      headers: { "Content-Type": "application/json" },
    });
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
