import { useState } from "react";

import FormControl from "../../ui/form-control/FormControl";
import Textarea from "../../ui/textarea/Textarea";
import Input from "../../ui/input/Input";
import Button from "../../ui/button/Button";
import { CommentContent } from "../../../types/comment";

type Props = {
  onAddComment: (comment: CommentContent) => Promise<void>;
};

const NewComment = ({ onAddComment }: Props): JSX.Element => {
  const [enteredAuthor, setEnteredAuthor] = useState("");
  const [enteredComment, setEnteredComment] = useState("");

  const addCommentHandler = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const newComment = {
      author: enteredAuthor,
      comment: enteredComment,
    };

    await onAddComment(newComment).then(() => {
      setEnteredAuthor("");
      setEnteredComment("");
    });
  };

  return (
    <form onSubmit={addCommentHandler}>
      <FormControl>
        <label htmlFor="author">Author*</label>
        <Input
          type="text"
          name="author"
          id="author"
          required={true}
          value={enteredAuthor}
          onChange={(event) => setEnteredAuthor(event.target.value)}
        />
      </FormControl>
      <FormControl>
        <label htmlFor="comment">Comment*</label>
        <Textarea
          name="comment"
          id="comment"
          required={true}
          value={enteredComment}
          onChange={(event) => setEnteredComment(event.target.value)}
        />
      </FormControl>
      <Button>Send</Button>
    </form>
  );
};

export default NewComment;
