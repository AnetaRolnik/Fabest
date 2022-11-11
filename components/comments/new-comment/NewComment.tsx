import { useState } from "react";

const NewComment = ({ onAddComment }: any): JSX.Element => {
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
      <div>
        <label htmlFor="author">Author*</label>
        <input
          type="text"
          name="author"
          id="author"
          required
          value={enteredAuthor}
          onChange={(event) => setEnteredAuthor(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="comment">Comment*</label>
        <textarea
          name="comment"
          id="comment"
          rows={5}
          required
          value={enteredComment}
          onChange={(event) => setEnteredComment(event.target.value)}
        />
      </div>
      <button>Send</button>
    </form>
  );
};

export default NewComment;
