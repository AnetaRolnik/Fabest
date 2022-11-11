import Container from "../layout/container/Container";
import NewComment from "./new-comment/NewComment";
import CommentList from "./comment-list/CommentList";

const DUMMY_COMMENTS = [
  { id: "c1", author: "Aneta", comment: "Super artykuł" },
  { id: "c2", author: "Lily", comment: "Bardzo ciekawy artykuł!!!" },
  { id: "c3", author: "Max", comment: "Bardzo fajna ta nowa kolekcja" },
];

const Comments = (): JSX.Element => {
  return (
    <Container>
      <NewComment />
      <CommentList comments={DUMMY_COMMENTS} />
    </Container>
  );
};

export default Comments;
