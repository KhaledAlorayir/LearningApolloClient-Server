import { Comment } from "../gql/graphql";

export type UpdateComment = {
  comment: Comment;
  img_id: string;
} | null;
