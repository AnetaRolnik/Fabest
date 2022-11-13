import { ObjectId } from "mongodb";

export type Author = string;
export type Content = string;
export type CommentId = ObjectId;

export type CommentContent = {
  author: Author;
  comment: Content;
};

export type Comment = CommentContent & {
  _id: CommentId;
};

export type Comments = Comment[];
